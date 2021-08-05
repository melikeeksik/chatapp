import { Form, Formik, Field } from 'formik';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

interface JoinFormProps {
  name?: string;
  room?: string;
}

const Join: FC = () => {
  const history = useHistory();
  const initialValues: JoinFormProps = { name: '', room: '' };

  const [formValues, setFormValues] = useState<JoinFormProps>({
    name: '',
    room: '',
  });

  const handleOnSubmit = async (values: JoinFormProps) => {
    console.log(values);
    setFormValues({ ...values });
    history.push(`/chat?name=${formValues?.name}&room=${formValues?.room}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      <Form>
        <Field name="name" placeHolder="isim" as={TextField}></Field>
        <Field name="room" placeHolder="oda" as={TextField}></Field>

        <Button variation="primary" size="medium" type="submit"></Button>
      </Form>
    </Formik>
  );
};

export default Join;
