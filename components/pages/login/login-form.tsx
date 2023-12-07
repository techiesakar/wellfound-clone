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
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";

export const LoginForm = () => {
  const formSchema = z.object({
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
      .min(4),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
            <Logo className="max-w-[120px]" />
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="text-base font-light">Find the job made for you!</p>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex gap-4 items-center w-full"
            >
              <FaGoogle /> Log in with Google
            </Button>
          </div>

          <div className="flex justify-between items-center">
            <span className="border-t border-gray-400 h-1 flex-1"></span>
            <p className=" px-6"> or Login with Email</p>
            <span className="border-t border-gray-400 h-1 flex-1"></span>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <p className="text-right">
            <Button
              variant="link"
              className="hover:text-active-red text-base underline  "
              asChild
            >
              <Link href="/login">Forget password</Link>
            </Button>
          </p>

          <Button type="submit" size="lg" variant="primary" className="w-full">
            Log in
          </Button>

          <p className="text-center">
            Not registered?
            <Button
              variant="link"
              className="hover:text-active-red text-base"
              asChild
            >
              <Link href="/login">Create an account</Link>
            </Button>
          </p>
        </form>
      </Form>
    </div>
  );
};
