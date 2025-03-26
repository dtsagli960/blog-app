import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { signup } from "@/services/auth.api";

const signupSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      await signup(data);
      toast("Account created!",{ 
        description: "Please login with your credentials",
      });
    } catch (error) {
      toast("Signup failed", {
        description: "Email or username already exists",
        dismissible: true,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            {...register("username")}
            placeholder="Username"
          />
          {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        </div>
        <div>
          <Input
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </div>
  );
}