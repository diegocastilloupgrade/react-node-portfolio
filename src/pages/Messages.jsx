import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../services/apiauth';
import { Navigate } from 'react-router-dom';

const MessageGallery = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await axios.get('http://localhost:5000/contact');
      setMessages(res.data.data.messages);
      console.log('messages', messages);
    };
    getMessages();
    
  }, []);
  
  
  
  return (
    <section className='pfContainer messageGallery'>
      <h1>Mensajes</h1>
      <div className='messageContainerList'>
        {messages.map((messages) => (
          <article className='messageContainer' key={messages._id}>
            <h2>Nombre: {messages.name}</h2>
            <p>Email: {messages.email}</p>
            <p>Contenido del mensaje: {messages.content}</p>
            <p>Teléfono: {messages.tel}</p>
            <p>Creado el: {messages.createdAt}</p>
            <p>Actualizado el:{messages.updatedAt}</p>
            <button
              type='submit'
              className='deleteMessage'
              key={messages._id}
              to={`/messages/delete/${messages._id}`}>
              Borrar mensaje
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
const deleteMessage = () => {
  const onSubmit = (formData) => {
    API.post('contact/delete', formData).then((res) => {
      Navigate('/contact');
    });
  };
};

export default MessageGallery;
