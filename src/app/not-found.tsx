import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <main>
      <EmptyState
        title="পেজটি খুঁজে পাওয়া যায়নি"
        description="আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।"
      />
    </main>
  );
}