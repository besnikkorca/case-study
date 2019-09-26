import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEntitiesList, cleanGetEntitiesList, deleteBulkEntities } from './actions';
import EntityTable from '../../components/EntityTable/EntityTable';
import DeleteIcon from '@material-ui/icons/Delete';

// TODO: move to corresponding place
const EntityActions = [
  {
    title: 'Delete',
    label: 'delete',
    icon: <DeleteIcon />,
    action: deleteBulkEntities,
  }
]

const EntityList = (props) => {
  const entity = props.match.params.entity;
  const { pagination = {}, result: data, isFetching, getEntitiesList } = props;
  const { page = 1 } = pagination

  useEffect(() => {
    getEntitiesList(entity, page)
  }, [getEntitiesList, entity, page]);

  const handleChangePage = (_, newPage) => {
    getEntitiesList(entity, newPage + 1)
  };

  const suppliedPage = page - 1

  return (
    <EntityTable
      actions={EntityActions}
      isFetching={isFetching}
      onChangePage={handleChangePage}
      page={suppliedPage}
      entity={entity}
      data={data}
    />
  );
}

EntityList.propTypes = {
  cleanGetEntitiesList: PropTypes.func.isRequired,
  getEntitiesList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  result: PropTypes.array.isRequired,
  success: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  const {
    getEntitiesListState: {
      isFetching,
      result,
      pagination,
      success,
    }
  } = state

  return {
    isFetching,
    pagination,
    result,
    success,
  }
}
const mapDispatchToProps = (dispatch) => ({
  getEntitiesList: (...params) => dispatch(getEntitiesList(...params)),
  cleanGetEntitiesList: () => dispatch(cleanGetEntitiesList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityList);
