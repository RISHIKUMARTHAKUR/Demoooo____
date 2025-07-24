
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
});

export function RegistrationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Registration Submitted!",
      description: "We've received your details and will be in touch shortly.",
    })
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline">Register for a Course</DialogTitle>
        <DialogDescription className="font-body">
          Our registration process has moved. Please click below to go to the full registration page.
        </DialogDescription>
      </DialogHeader>
        <div className="py-4">
             <Button asChild className="w-full" size="lg">
                <Link href="/course-registration">Go to Registration Page</Link>
            </Button>
        </div>
    </>
  );
}
