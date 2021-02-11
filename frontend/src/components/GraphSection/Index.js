import React, { useState } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import IOSSwitch from "./IOSSwitch";
import { connect } from "react-redux";
import { switchAnalysisType } from "../../actions";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AnalysisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  background-color: #cccccc;
  @media (max-width: 500px) {
    width: 85vw;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonHeading = styled.div`
  font-family: aktiv-grotesk;
  color: white;
  font-size: 12px;
`;

const Index = (props) => {
  const [documentAnalysis, toggleAnalysis] = useState(
    props.analysisType.documentAnalysis
  );
  let documentData = [];
  let sentenceData = [];
  let sentenceLabels = [];

  const handleDocumentData = () => {
    // if document score is below 0 changes the bounds to (-1, 1)
    if (props.document.documentScore < 0) {
      documentData.push(
        props.document.documentScore,
        props.document.documentMagnitude,
        -1,
        1
      );
    } else {
      documentData.push(
        props.document.documentScore,
        props.document.documentMagnitude,
        0,
        1
      );
    }
  };

  const renameSentences = (sentence) => {
    if (sentence.length > 20) {
      let slicedSentence = sentence.slice(0, 21);
      let sentenceLabel = slicedSentence.concat("...");
      return sentenceLabel;
    } else {
      return sentence;
    }
  };

  const handleSentenceData = () => {
    props.documentSentences.sentences.forEach((sentence) => {
      // Number.EPSILON represents the difference between 1 and the smallest floating point number greater than 1.
      // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
      sentenceData.push(
        Math.round((sentence.score + Number.EPSILON) * 100) / 100
      );
      const sentenceLabel = renameSentences(sentence.content);
      sentenceLabels.push(sentenceLabel);
    });
    sentenceData.push(0, 1);
  };

  const handleAnalysisChange = () => {
    toggleAnalysis(!documentAnalysis);
    props.switchAnalysisType(props.analysisType.documentAnalysis);
  };

  return (
    <Root>
      {handleDocumentData()}
      {handleSentenceData()}
      <SwitchWrapper>
        <ToggleWrapper>
          <ButtonHeading>
            switch to{" "}
            {props.analysisType.documentAnalysis ? "sentences" : "document"}{" "}
          </ButtonHeading>
          <IOSSwitch
            checked={documentAnalysis}
            onChange={handleAnalysisChange}
          />
        </ToggleWrapper>
      </SwitchWrapper>
      <AnalysisWrapper>
        {!props.loading.applicationLoading ? (
          props.analysisType.documentAnalysis ? (
            <BarChart
              labels={["sentiment score", "magnitude"]}
              data={documentData}
              title={"Document"}
            />
          ) : (
            <BarChart
              labels={sentenceLabels}
              data={sentenceData}
              title={"Sentence sentiment score"}
            />
          )
        ) : null}
      </AnalysisWrapper>
    </Root>
  );
};

function mapStatetoProps(state) {
  return {
    loading: state.loading,
    author: {
      profileName: state.author.profileName,
      name: state.author.name,
      image: state.author.profileImage,
    },
    tweet: {
      contents: state.document.documentContents,
      createdTime: state.tweetMetaData.createdTime,
    },
    document: {
      documentContents: state.document.documentContents,
      documentScore: state.document.documentScore,
      documentMagnitude: state.document.documentMagnitude,
    },
    documentSentences: {
      sentences: state.documentSentences.sentences,
      sentencesByIndex: state.documentSentences.sentencesByIndex,
    },
    analysisType: {
      documentAnalysis: state.analysisType.documentAnalysis,
    },
  };
}

export default connect(mapStatetoProps, { switchAnalysisType })(Index);
