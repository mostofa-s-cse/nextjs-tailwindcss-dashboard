import LoginForm from "@/components/auth/login-form";

export default function Page() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <LoginForm />
    </div>
  )
}
