
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import SignInForm from "./SignInForm";
import { useAuth } from "@/context/AuthContext";

interface SignInDialogProps {
  trigger?: React.ReactNode;
}

const SignInDialog = ({ trigger }: SignInDialogProps) => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleDialogClose = () => {
    setOpen(false);
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary text-white hover:bg-primary/90">
            Sign In
            <User className="w-4 h-4 ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Wanderlust</DialogTitle>
          <DialogDescription>
            Sign in to your account to book tours, save destinations, and more.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <SignInForm onSuccess={handleDialogClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
