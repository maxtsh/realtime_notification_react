import { writeToLS } from "@/utils/Storage/LocalStorage";
import { useRef, FormEvent, MutableRefObject, RefObject } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameRef.current) {
      const username = usernameRef.current.value;
      if (username) {
        writeToLS(username, "notification_username");
        navigate("/", { replace: true });
      }
    }
  };

  return { usernameRef, passwordRef, handleSubmit };
};

export default useLogin;
