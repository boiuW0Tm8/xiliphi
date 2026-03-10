export default function AccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 pb-48 animate-fade-in-up">
      <div className="text-center max-w-md space-y-6">
        <h1 className="text-3xl tracking-wide">Account</h1>

        <p className="text-neutral-600">
          Manage your orders, addresses, and account details.
        </p>

        <a
          href="https://shopify.com/65072234559/account"
          className="inline-block px-12 py-4 rounded-full bg-neutral-200 text-neutral-800 text-sm tracking-wide uppercase hover:bg-neutral-400 transition cursor-pointer"
        >
          Sign In
        </a>
      </div>
      
    </main>
  );
}