
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  course: z.string().optional(),
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(1, { message: 'Contact number is required.' }),
  qualification: z.string().optional(),
  college: z.string().min(1, { message: 'College name is required.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  transactionId: z.string().min(1, { message: 'Transaction ID is required.' }),
});

export async function submitRegistration(prevState: any, formData: FormData) {
  
  const rawData = {
    name: formData.get('name'),
    course: formData.get('course'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    qualification: formData.get('qualification'),
    college: formData.get('college'),
    address: formData.get('address'),
    transactionId: formData.get('transactionId'),
  };

  const validatedFields = formSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: 'validation_failed',
      errors: validatedFields.error.flatten().fieldErrors,
      whatsappUrl: null,
    };
  }
  
  const registrationDetails = `
New Course Registration:
------------------------
Name: ${validatedFields.data.name}
Interested Course: ${validatedFields.data.course || 'Not specified'}
Email: ${validatedFields.data.email}
Phone: ${validatedFields.data.phone}
Qualification: ${validatedFields.data.qualification || 'Not specified'}
College: ${validatedFields.data.college}
Address: ${validatedFields.data.address}
Transaction ID: ${validatedFields.data.transactionId}
------------------------
  `;

  const whatsappNumber = "+917982215080"; 
  const encodedMessage = encodeURIComponent(registrationDetails.trim());
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return { 
    message: 'success', 
    errors: null,
    whatsappUrl: whatsappUrl 
  };
}
