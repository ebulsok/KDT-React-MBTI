const connection = require('../dbConnect');

const db = {
  getCounts: (cb) => {
    connection.query('SELECT counts FROM MyDB.visitor;', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  incCounts: (cb) => {
    connection.query(
      'UPDATE visitor SET counts = counts + 1 WHERE id = 1;',
      (err) => {
        if (err) throw err;
        cb(JSON.stringify('업데이트 성공'));
      }
    );
  },
  getSurvey: (cb) => {
    connection.query(
      'SELECT * FROM MyDB.question q LEFT JOIN MyDB.answer a ON q.ID_PK=a.QUESTION_ID_FK;',
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  getExplanation: (cb) => {
    connection.query('SELECT * FROM MyDB.explanation', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
};

module.exports = db;
