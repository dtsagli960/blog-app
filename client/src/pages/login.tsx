import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/services/auth.api";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit", 
  });

  const onSubmit = async (data: any) => {
    try {
      const token = await login(data);
      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input 
          {...register("email", { required: "Email is required" })} 
          id="email"
          type="type"
          placeholder="Email" 
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        <Input 
          id="password"
          {...register("password")} 
          placeholder="Password" 
          type="password" 
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
}