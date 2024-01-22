//@ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseAge, chooseA_content, chooseColor, chooseFlavor } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseAge(data.age));
      dispatch(chooseA_content(data.a_content));
      dispatch(chooseColor(data.color));
      dispatch(chooseFlavor(data.flavor));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="name">Age</label>
          <Input {...register('age')} name='age' placeholder="Age" />
        </div>
        <div>
          <label htmlFor="email">Alcohol Content</label>
          <Input {...register('a_content')} name='a_content' placeholder="Alcohol Content" />
        </div>
        <div>
          <label htmlFor="phone_number">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div>
          <label htmlFor="address">Flavor</label>
          <Input {...register('flavor')} name='flavor' placeholder="Flavor" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm