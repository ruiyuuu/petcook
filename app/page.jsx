"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const formSchema = z.object({
  userId: z.string().min(2).max(50),
});

export default function Home() {
  const [login, setLogin] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });
  function onSubmit(values) {
    if (values.userId === "petcook") {
      sessionStorage.setItem("id", values.userId);
      setLogin(true);
    }
  }
  return (
    <>
      {login === false && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input placeholder="請輸入ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">送出</Button>
          </form>
        </Form>
      )}
      {login === true && (
        <ul>
          <li>
            <a href="./product/所有版型">所有版型</a>
          </li>
          <li>
            <a href="./product/急凍骰子牛凍乾">急凍骰子牛凍乾</a>
          </li>
          {/* <li>
        <a href="./product/五告順優格雞肉凍乾">五告順優格雞肉凍乾</a>
      </li>
      <li>
        <a href="./product/北歐交響鮭凍乾">北歐交響鮭凍乾</a>
      </li> */}
        </ul>
      )}
    </>
  );
}
