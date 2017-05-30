import styled from 'styled-components';


export const ContentWrapper = styled.div`
  width: calc(100% - 210px);
  height: 100%;
  overflow: auto;
  justify-content: space-between;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
`;

export const TableHeader = styled.div`
  min-width: calc(100% - 230px);
  background: #f0f0f0;
  height: 60px;
  padding: 0 10px;
  position: absolute;
`;

export const ColumnName = styled.div`
  display: inline-block;
  padding: 32px 10px 10px 10px;
  font-weight: 700;
  color: #35404b;
  width: auto;
  font-size: 13px;
`;

export const TableContent = styled.div`
  display: block;
  height: 100%;
`;

export const Row = styled.div`
  width: auto;
  display: inline-block;
  padding: 32px 21px 10px 21px;
`;

export const Cell = styled.div`
  width: auto;
  min-width: 100px;
  font-size: 13px;
  font-weight: 300;
  color: #939393;
  display: inline-block;
  background: ${props => props.background === 0 ? '#f0f0f0' : '#fff'}
`;

export const CellText = styled.span`
  display: inline-block;
  max-width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 16px;
  min-height: 16px;
`;

export const CellContainer = styled.div`
  padding: 11px 10px;
  border: 1px solid rgba(0, 0, 0, 0.047);

  &:hover {
    box-shadow: inset 0 0 6px 1px #dedede;
  }
`;
