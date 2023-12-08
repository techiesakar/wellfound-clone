"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export const HeroForm = () => {
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
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                {/* <FormLabel>Email</FormLabel> */}
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
        {/* <p className="text-center">
          Already have an account ?
          <Button
            variant="link"
            className="hover:text-active-red text-base"
            asChild
          >
            <Link href="/login">Log in</Link>
          </Button>
        </p> */}
      </Form>
    </div>
  );
};
