import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCategoriesThunk } from "../store/main/mainActions";
import { setCategory } from "../store/main/mainSlice";
import { Loader } from "./Loader";

const Step1 = (props: any) => {
  const { categoriesList, loading } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);
  const categoryHandler = (value: number | string) => {
    const category = value + "";
    dispatch(setCategory(category));
    props.nextStep();
  };
  if (loading) return <Loader />
  else
    return (
      <div>
        <h1>Choose category: </h1>
        <button onClick={() => categoryHandler("")}>Any</button>
        {categoriesList.length > 0 &&
          categoriesList.map((item) => (
            <button key={item.id} onClick={() => categoryHandler(item.id)}>
              {item.name}
            </button>
          ))}

        <button onClick={props.nextStep}>go to step 2</button>
      </div>
    );
};
export default Step1;
