const express = require('express');
const { TeacherList, HTMLCourses, CSSCourses, JSCourses, Topics } = require('./data');

const app = express();

app.get('/courses/:topic', (req, res) => {
  const { topic } = req.params;
  const courses =
    {
      html: HTMLCourses,
      css: CSSCourses,
      javascript: JSCourses
    }[topic] || [];
  res.send({ courses });
});

app.get('/teachers', (_, res) => res.send({ teachers: TeacherList }));

app.get('/topics', (_, res) => res.send({ topics: Topics }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`Server is listening on ${PORT}`));
