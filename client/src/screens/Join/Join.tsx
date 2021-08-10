import { Form, Formik, Field } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../actions/user/atom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

interface JoinFormProps {
  name?: string;
  room?: string;
}

const Join: FC = () => {
  const history = useHistory();
  const initialValues: JoinFormProps = { name: '', room: '' };
  const [user, setUser] = useRecoilState(userAtom);

  const handleOnSubmit = async (values: JoinFormProps) => {
    setUser({ ...values });
  };

  useEffect(() => {
    user?.name &&
      user?.room &&
      history.push(`/chat?name=${user?.name}&room=${user?.room}`);
  }, [user, history]);

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
