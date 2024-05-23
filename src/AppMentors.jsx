import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
      {
        name: '준',
        title: 'PM',
      },
    ],
  });


  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          // prev 이름 맞는사람을 찾고 
          // 그 사람의 이름을 바꿔야 할거같은데 -> setPerson() 이 함수로 스프레드 함수 써서 하면 될거같고 

          setPerson((prePreson) => ({
            ...prePreson,
            mentors : prePreson.mentors.map((mentor) => {
              if(mentor.name == prev) {
                return {...mentor, name : current}
              }
              return mentor
            })
          }))
        }}
      >
        멘토의 이름을 바꾸기
      </button>
        <button onClick={() => {
            const newName = prompt(`추가할 멘토 이름이 무엇인가요 ?`);
            const newTitle = prompt(`추가할 멘토 타이틀이 무엇인가요 ?`);
            setPerson((prePreson) => ({
              // 기존 데이터 보존
              ...prePreson,
              mentors : [
                ...prePreson.mentors,
                {
                  name : newName,
                  title : newTitle
                }
              ]
            }))
        }}>멘토 추가하기</button>
        <button onClick={() => {
            const deleteName = prompt(`삭제할 멘토 이름이 무엇인가요?`);

            setPerson((prePreson) => ({
              ...prePreson,
              mentors : 
                prePreson.mentors.filter(mentor => mentor.name !== deleteName)
            }))

        }}>멘토 삭제하기</button>

    </div>
  );
}
