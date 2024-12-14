import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 text-pink-400">
      <h3>Welcome Home!</h3>
      <Button>Click me</Button>
    </div>
  );
}
