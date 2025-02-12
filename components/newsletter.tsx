"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: "Newsletter subscription will be available soon.",
      duration: 3000,
    });
    setEmail(""); // Clear the input
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
      <p className="text-sm text-muted-foreground">
        Get the latest updates and insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-[240px]"
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}
