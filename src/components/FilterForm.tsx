import { Field, Form } from "react-final-form";
import { amountItems, categoriesItems} from "../FormItems";
import { IFilterFormProps, ISubmitForm } from "../interfaces";

const FilterForm: React.FC<IFilterFormProps> = ({ setUrl, setAmount }) => {
    const onSubmit = (e: ISubmitForm) => {
      const createUrl = () => {
        let instance = "https://opentdb.com/api.php?amount=" + e.amount;
        if (e.category) {
          instance = instance + "&category=" + e.category;
        } else if (e.difficulty) {
          instance = instance + "&difficulty=" + e.difficulty;
        }
        instance = instance + "&encode=base64";
        return instance;
      };
      setUrl(createUrl());
      setAmount(e.amount);
    };
    return (
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="amount">
                {({ input }) => (
                  <select {...input} >
                    {amountItems.map(item => (
                      <option key={item.ui} value={item.value}>{item.ui}</option>
                    ))}
                    
                  </select>
                )}
              </Field>
              <Field name="category">
                {({ input }) => (
                  <select {...input} >
                   {categoriesItems.map(item => (
                    <option key={item.category} value={item.value}>{item.category}</option>
                   ))}
                  </select>
                )}
              </Field>
              <Field name="difficulty">
                {({ input }) => (
                  <select {...input} >
                    <option>Choose defficulty</option>
                    <option value="">any difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                  </select>
                )}
              </Field>
              <button type="submit">Save</button>
            </form>
          )}
        />
      </div>
    );
  };
  
  export default FilterForm;