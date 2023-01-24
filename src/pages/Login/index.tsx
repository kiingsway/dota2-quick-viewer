import { Button, Card, Checkbox, Form, Input } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { GetPlayer } from '../../services/requests';
import styles from './Login.module.scss';

interface Props {
  handleAlerts: THandleAlerts;
  setPlayer: Dispatch<SetStateAction<IPlayer | undefined>>;
}

export default function Login({ handleAlerts, setPlayer }: Props) {

  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    GetPlayer(values.Steam32AccountID)
      .then(resp => setPlayer(resp.data))
      .catch(e => handleAlerts(e, 'error'))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.Login}>
      <Card title='Login'>

        <Form
          name="basic"
          labelCol={{ span: 12 }}
          onFinish={onFinish}>

          <Form.Item
            label="Steam32 account ID"
            name="Steam32AccountID"
            rules={[{ required: true, message: 'ID do usuário da Steam é necessário...' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
              Enviar
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  )
}