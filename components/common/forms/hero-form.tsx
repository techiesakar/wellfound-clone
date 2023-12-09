"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const HeroForm = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.getAll);

  const router = useRouter();

  const formSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email is invalid",
      })
      .email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: searchParams.get("email") || "",
    },
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    router.push(
      "/jobs/signup" + "?" + createQueryString("email", values.email)
    );
  };
  return (
    <div className="sm:border p-6 border border-gray-300  rounded-sm  max-w-full w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex lg:flex-row flex-col justify-between gap-4 items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="lg:flex-1 w-full items-center">
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="placeholder:text-gray-400 rounded-xl px-4 placeholder:font-medium text-lg font-light py-6"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            variant="primary"
            className="py-6 lg:w-auto w-full"
          >
            Candidate sign up
          </Button>

          <p className="text-center font-light">or</p>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="flex gap-4 items-center py-6 lg:w-auto w-full"
          >
            <FaGoogle /> Sign up with Google
          </Button>
        </form>
      </Form>
    </div>
  );
};
