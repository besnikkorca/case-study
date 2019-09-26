import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../ui/table/Table'

const EntityTable = (props) => {
  const { data, page, entity, isFetching, actions } = props

  const [headCells, setHeadCells] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (data && data[0]) {
      // we're generating the headers of the first result item received
      const attributesMap = data[0].attributes
      const attributesHeadCells = Object.keys(attributesMap).map((attrKey) =>
        ({ id: attrKey, numeric: typeof attributesMap[attrKey] === 'number', disablePadding: false, label: attrKey }))

      const generatedHeadCells = [...attributesHeadCells]

      setHeadCells(generatedHeadCells)

      const customRows = data.map((row) => [{ id: 'id', }, ...generatedHeadCells].reduce((acc, { id }) => {
        const isAttribute = attributesHeadCells.findIndex(({ id: aId }) => aId === id) !== -1
        if (isAttribute) {
          acc[id] = row.attributes[id]
          return acc
        }

        acc[id] = row[id]
        return acc
      }, {}))
      setRows(customRows)
    }
  }, [data])

  return (
    <Table
      actions={actions}
      onChangePage={props.onChangePage}
      isFetching={isFetching}
      entity={entity}
      headCells={headCells}
      rows={rows}
      rowsPerPage={rows.length}
      page={page}
    />
  )
}

EntityTable.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      action: PropTypes.func.isRequired,
    })
  ),
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.object.isRequired,
      id: PropTypes.string.isRequired,
      links: PropTypes.shape({
        self: PropTypes.string.isRequired,
      }),
      relationships: PropTypes.object.isRequired, // TODO: update this

    })
  )
}

export default EntityTable;
