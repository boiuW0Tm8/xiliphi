import AlmanacSearch from "./AlmanacSearch";
import { ingredients } from "@/lib/ingredients";

export default function AlmanacPage() {
  return (
    <main className="bg-white min-h-screen px-6 py-20 text-neutral-700 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-medium mb-6 text-neutral-900">
            The Almanac
          </h1>

          <p className="text-lg font-medium leading-normal max-w-2xl">
            Welcome to the Almanac. Here, you can find information on every
            ingredient used in Xiliphi products — what it is, why we use it,
            and how it supports the skin.
          </p>
        </header>

        {/* Search + Ingredient List */}
        <AlmanacSearch ingredients={ingredients} />

      </div>
    </main>
  );
}