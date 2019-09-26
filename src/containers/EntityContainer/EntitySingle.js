import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEntity, cleanGetEntity } from './actions';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Spinner from '../../components/ui/spinner/Spinner';

const EntitySingle = (props) => {
  const entity = props.match.params.entity;
  const id = props.match.params.id;
  const { getEntity, result: data, isFetching } = props

  const backLink = <Link to={`/${entity}`}>Back</Link>
  let content = <Spinner />

  const attributes = data.attributes || {}
  const attrKeys = Object.keys(attributes)

  const relationships = data.relationships || {}
  const relationshipKeys = Object.keys(relationships)

  useEffect(() => {
    getEntity(entity, id)
  }, [getEntity, entity, id]);

  const printObjectProps = (object) => {
    return Object.keys(object).map((prop) => (
      <p
        key={prop}
      >{prop}: {object[prop]}</p>
    ))
  }

  if (!isFetching) {
    content = (
      <>
        <Typography variant="h4" gutterBottom>
          {attrKeys.map((key) => <React.Fragment key={key}>{key}: {attributes[key]}<br/><br/></React.Fragment>)}
        </Typography>
        <hr />
        <Typography variant="h5" gutterBottom>
            {relationshipKeys.map((key) => {
              const title = key
              const relationship = relationships[key]
              const data = relationship.data || {}
              const { self, related } = relationship.links || {}
              return (
                <React.Fragment
                  key={key}
                >
                  {title}
                  <br/>
                  {Array.isArray(data) ? data.map(printObjectProps) : printObjectProps(data)}
                  {self && <a href={self}>self</a>} - {related && <a href={related}>related</a>}
                  <hr />
                </React.Fragment>
              )
            })}
        </Typography>
      </>
    )
  }

  return (
    <>
      {backLink}
      <br/><br/>
      {content}
    </>
  );
}

EntitySingle.propTypes = {
  cleanGetEntity: PropTypes.func.isRequired,
  getEntity: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  result: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  const {
    getEntityState: {
      isFetching,
      result,
      success,
    }
  } = state

  return {
    isFetching,
    result,
    success,
  }
}
const mapDispatchToProps = (dispatch) => ({
  getEntity: (...params) => dispatch(getEntity(...params)),
  cleanGetEntity: () => dispatch(cleanGetEntity()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EntitySingle);
