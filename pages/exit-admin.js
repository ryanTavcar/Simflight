import { useEffect } from "react";
import { useRouter } from "next/router";
import { useEditState } from "tinacms/dist/edit-state";

const GoToEditPage = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(false);
    router.back();
  }, []);
  return (
      <div >
        <div>
          <h2>Exiting edit mode...</h2>
        </div>
      </div>
  );
};

export default GoToEditPage;