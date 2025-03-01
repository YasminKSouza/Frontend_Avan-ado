import React from 'react'

const Aluno = ({ nome, email, curso, media, status }) => {
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>
      <p>Media: {media}</p>
      <p>Status: {media >= 7 ? <strong>Aprovado</strong> : <strong>Reprovado</strong>}</p>
      <p>-----------------------------------------------</p>
    </>
  )
}

export default Aluno