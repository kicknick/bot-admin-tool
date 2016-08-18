import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import Page from '../components/Page';
import BotList from '../components/BotList';
import DialogueList from '../components/DialogueList';
import Chat from '../components/Chat';
import Modal from '../components/Modal';
import Note from '../components/Note';


class App extends Component {

  constructor(props) {
    super(props);
    props.pageActions.getBotList();


    // Operations usually carried out in componentWillMount go here
  }


  render() {
    const { botList, currentHoverBot, currentBot, currentDialogues, currentDialogue, currentMessage} = this.props.page;
    const { setYear, getBotList, mouseOverBotCard, clickBotCard, chooseDialog, chooseMessage, onChangeText, done} = this.props.pageActions;
        console.log(currentMessage)
    return(
	    <div className="ui grid container">
        <div className="two wide column">
          <BotList botList={botList} currentBot={currentBot} currentHoverBot={currentHoverBot} mouseOverBotCard={mouseOverBotCard} clickBotCard={clickBotCard}/>
        </div>
        <div className="four wide column">
          <DialogueList currentBot={currentBot} dialogues={currentDialogues} currentDialogue={currentDialogue} chooseDialog={chooseDialog}/>
        </div>
        <div className="six wide column">
          <Chat currentDialogue={currentDialogue} chooseMessage={chooseMessage} currentMessage={currentMessage}/>
        </div>
      <div className=" wide column">
        <Note onChangeText={onChangeText} currentMessage={currentMessage} done={done}/>
      </div>
      {/*<Modal />*/}
	    </div>
	   )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)