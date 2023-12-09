"use client";
import { Logo } from "@/components/navigation/logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";

export const SignUpForm = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("email"));

  const formSchema = z.object({
    fullname: z
      .string({
        required_error: "Name is required",
      })
      .min(3),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email is invalid",
      })
      .email(),

    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: searchParams.get("email") || "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="max-w-[420px] w-full mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-5">
            <Logo className="max-w-[160px]" />
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <p className="text-base font-light">Find your next opportunity!</p>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex gap-4 items-center w-full"
            >
              <FaGoogle /> Sign up with Google
            </Button>
          </div>

          <div className="flex justify-between items-center">
            <span className="border-t border-gray-400 h-1 flex-1"></span>
            <p className=" px-6"> or Sign up with Email</p>
            <span className="border-t border-gray-400 h-1 flex-1"></span>
          </div>

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="enter text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@website.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="min 6 character" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" variant="primary" className="w-full">
            Sign up
          </Button>

          <p className="text-center text-sm font-light">
            By continuing you accept our standard
            <Link href="/">terms and conditions</Link> and our
            <Link href="/">privacy policy</Link>
          </p>

          <p className="text-center">
            Already have an account?
            <Button
              variant="link"
              className="hover:text-active-red text-base"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
          </p>
        </form>
      </Form>
    </div>
  );
};
