
'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { submitRegistration } from './actions';


const registrationFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  course: z.string().optional(),
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(1, { message: 'Contact number is required.' }),
  qualification: z.string().optional(),
  college: z.string().min(1, { message: 'College name is required.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  transactionId: z.string().min(1, { message: 'Transaction ID is required.' }),
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

const initialState = {
  message: '',
  errors: null,
  whatsappUrl: null,
};

export default function CourseRegistrationPage() {
    const { toast } = useToast();
    const [state, formAction] = useActionState(submitRegistration, initialState);
    
    const form = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            course: '',
            qualification: '',
            college: '',
            address: '',
            transactionId: '',
        },
        // Pass errors from the server action to the form
        errors: state.errors ? state.errors : undefined,
    });
    
    // Watch for form submission status
    const { isSubmitting } = form.formState;

    useEffect(() => {
        if (state.message === 'success' && state.whatsappUrl) {
            toast({
                title: 'Registration Submitted!',
                description: 'Please complete the process on WhatsApp.',
            });
            window.open(state.whatsappUrl, '_blank');
            form.reset();
        } else if (state.message === 'validation_failed') {
            toast({
                title: 'Validation Failed',
                description: 'Please check your input and try again.',
                variant: 'destructive',
            });
        } else if (state.message && state.message !== 'success' && state.message !== 'validation_failed') {
             toast({
                title: "Error",
                description: state.message,
                variant: "destructive"
            });
        }
    }, [state, toast, form]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
            <div className="w-full max-w-2xl">
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-3xl font-headline">Course Registration</CardTitle>
                        <CardDescription className="text-center font-body pt-2">
                          Fill out the form below to enroll. After payment, enter the transaction ID and submit.
                          <br/>
                           <Link href="/" className="text-primary hover:underline">Go back to Home</Link>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form action={formAction} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Name" {...field} />
                                            </FormControl>
                                            <FormMessage/>
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
                                                <Input type="email" placeholder="Your Email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your contact number" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="course"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Interested Course</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a course you are interested in" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Spoken English Foundation">Spoken English Foundation</SelectItem>
                                                <SelectItem value="Conversation Pro">Conversation Pro</SelectItem>
                                                <SelectItem value="Interview Fluency Mastery">Interview Fluency Mastery</SelectItem>
                                                <SelectItem value="Personality Makeover + Communication Lab">Personality Makeover + Communication Lab</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="qualification"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Qualification</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. B.Tech, MBA" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="college"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>College Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your college/university name" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your current address" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <Card className="flex flex-col items-center p-6 bg-muted">
                                    <h4 className="text-lg font-medium mb-4 text-center">Scan to Pay via UPI</h4>
                                    <div className="flex flex-col items-center">
                                        <Image src="/ProBhasha_QR_CODE.jpg" width={200} height={200} alt="QR Code" data-ai-hint="QR code" />
                                    </div>
                                </Card>

                                <FormField
                                    control={form.control}
                                    name="transactionId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Transaction ID</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Transaction ID after payment" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
      );
    }
