import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Newsletter } from "@/components/newsletter";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Logo asLink={false} />
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <Newsletter />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} vikiflow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
