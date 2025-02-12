"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MotionDiv, LoaderAnimation } from "./motion-elements";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(50, "Company must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Company can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),
  phone: z
    .string()
    .min(5, "Phone must be at least 5 characters")
    .max(20, "Phone must not exceed 20 characters"),
  budget: z
    .enum(["reset", "<2k", "2k-5k", "5k-10k", "10k-15k", "15k-20k", "20k+"])
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      budget: undefined,
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to send email");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Error details:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Your name</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">
                  Your company/organisation
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type="email"
                    {...field}
                    className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                    disabled={isSubmitting}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Phone number</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type="tel"
                    {...field}
                    className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                Please select a rough budget range
              </FormLabel>
              <div className="flex gap-2 w-full">
                <Select
                  onValueChange={(value) => {
                    if (value === "reset") {
                      field.onChange(undefined);
                    } else {
                      field.onChange(value);
                    }
                  }}
                  value={field.value || ""}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem
                      value="reset"
                      className="text-muted-foreground italic"
                    >
                      Reset selection
                    </SelectItem>
                    <SelectItem value="<2k">Below $2,000</SelectItem>
                    <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-15k">$10,000 - $15,000</SelectItem>
                    <SelectItem value="15k-20k">$15,000 - $20,000</SelectItem>
                    <SelectItem value="20k+">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">How can we help?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[150px] bg-background border-muted-foreground/20 rounded-md px-4 py-3 resize-none"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" required />
            <label
              htmlFor="privacy"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              You agree to our friendly{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>
              .
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-md py-6 text-base font-normal"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderAnimation>
                  <Loader2 className="h-4 w-4" />
                </LoaderAnimation>
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
