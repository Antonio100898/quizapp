import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCategoriesThunk } from "../store/main/mainActions";
import { setCategory, setCategoryName } from "../store/main/mainSlice";
import ChoiceButton from "./ChoiceButton";
import { Loader } from "./Loader";

const Step1 = (props: any) => {
  const { categoriesList, loading } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
    localStorage.removeItem("questions");
  }, []);
  const categoryHandler = (categoryNumber: number | string, categoryName: string) => {
    const category = categoryNumber + "";
    dispatch(setCategory(category));
    dispatch(setCategoryName(categoryName));
    props.nextStep();
  };
  if (loading) return <Loader />;
  else
    return (
      <div className="flex-box">
        <div>
          <h1 className="header">Choose category</h1>
        </div>
        <div className="flex flex-wrap justify-evenly m-5">
          <ChoiceButton  onClick={() => categoryHandler("", "any")}>Any</ChoiceButton>
          {categoriesList.length > 0 &&
            categoriesList.map((item) => (
              <ChoiceButton key={item.id} onClick={() => categoryHandler(item.id, item.name)}>
                {item.name}
              </ChoiceButton>
            ))}
        </div>
      </div>
    );
};
export default Step1;
