import React from 'react';
import Question from '../components/Question';
import QuestionForm from '../components/QuestionForm';

class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: [],
      submittedQuestion: "",
      submittedAnswer: ""
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
    this.handleChangeQuestion = this.handleChangeQuestion.bind(this)
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  handleSubmit(event){
    event.preventDefault()
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify({
        question: this.state.submittedQuestion,
        answer: this.state.submittedAnswer
      })
    }).then(response => response.json())
    .then(body => {
      this.setState({
        questions: this.state.questions.concat(body),
        submittedAnswer: "",
        submittedQuestion: ""
      })
      console.log(body)
    })
  }

  componentDidMount() {
    fetch('/api/v1/questions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({questions: json})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChangeQuestion(event){
    event.preventDefault()
    this.setState({submittedQuestion: event.target.value})
  }

  handleChangeAnswer(event){
    event.preventDefault()
    this.setState({submittedAnswer: event.target.value})
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
        <form onSubmit={this.handleSubmit}>
          <QuestionForm
            label="Question"
            name="question-submit"
            handleChange={this.handleChangeQuestion}
            value={this.state.submittedQuestion}
          />
          <QuestionForm
            label="Answer"
            name="answer-submit"
            handleChange={this.handleChangeAnswer}
            value={this.state.submittedAnswer}
          />
          <input type="submit" className="button" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default FAQContainer;
