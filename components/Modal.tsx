import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Modal(prop: { 
    isOpen: boolean; 
    title: string; 
    description: string; 
    children: React.ReactNode
    onOpenChange?: (open: boolean) => void
}) {

    const {
        isOpen, 
        title,
        description,
        children,
        onOpenChange
    } = prop



  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>

          <section>
            {children}
          </section>
        </DialogContent>
      </form>
    </Dialog>
  );
}
