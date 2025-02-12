"use client";

import { useEffect, useRef, memo } from "react";

interface Point {
  x: number;
  y: number;
}

const GRID_SPACING = 80;
const POINT_RADIUS = 2;
const CONNECTION_DISTANCE = 100;
const MAX_CONNECTIONS = 3;

// Convert HSL to RGBA for canvas
const primaryColor = "rgba(157, 0, 255, 0.2)"; // Primary color with 0.2 opacity
const primaryColorDot = "rgba(157, 0, 255, 0.5)"; // Primary color with 0.5 opacity

function NetBackgroundComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const lastRenderTime = useRef<number>(0);
  const isVisible = useRef(true);
  const FPS_LIMIT = 30;
  const FRAME_TIME = 1000 / FPS_LIMIT;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const handleVisibilityChange = () => {
      isVisible.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let isPowerSaveMode = false;
    if ("getBattery" in navigator) {
      (navigator as any).getBattery?.().then((battery: any) => {
        const updateBatteryStatus = () => {
          isPowerSaveMode = battery.level <= 0.2 && !battery.charging;
        };
        battery.addEventListener("levelchange", updateBatteryStatus);
        battery.addEventListener("chargingchange", updateBatteryStatus);
        updateBatteryStatus();
      });
    }

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(() => {
      if (isVisible.current) {
        updateCanvasSize();
        updatePoints();
      }
    });
    resizeObserver.observe(container);

    const points: Point[] = [];
    const updatePoints = () => {
      points.length = 0;
      const rect = container.getBoundingClientRect();
      const cols = Math.floor(rect.width / GRID_SPACING);
      const rows = Math.floor(rect.height / GRID_SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({
            x: i * GRID_SPACING + GRID_SPACING / 2,
            y: j * GRID_SPACING + GRID_SPACING / 2,
          });
        }
      }
    };

    updatePoints();

    const animate = (currentTime: number) => {
      if (!isVisible.current) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      if (
        currentTime - lastRenderTime.current >=
        (isPowerSaveMode ? FRAME_TIME * 2 : FRAME_TIME)
      ) {
        const rect = container.getBoundingClientRect();

        // Fill with background color
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, rect.width, rect.height);

        // Set theme colors
        ctx.strokeStyle = primaryColor;
        ctx.fillStyle = primaryColorDot;

        points.forEach((point) => {
          // Draw point
          ctx.beginPath();
          ctx.arc(point.x, point.y, POINT_RADIUS, 0, Math.PI * 2);
          ctx.fill();

          let connections = 0;
          for (const otherPoint of points) {
            if (connections >= MAX_CONNECTIONS) break;

            const dx = otherPoint.x - point.x;
            const dy = otherPoint.y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0 && distance < CONNECTION_DISTANCE) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
              connections++;
            }
          }
        });

        lastRenderTime.current = currentTime;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

export const NetBackground = memo(NetBackgroundComponent);
