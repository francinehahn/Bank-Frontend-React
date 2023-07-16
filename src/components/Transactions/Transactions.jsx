import PropTypes from 'prop-types';
import { TransactionContainer } from './styles';

export function Transactions (props) {
    return (
        <TransactionContainer>
            <p>{props.date}</p>
            <p>{props.value}</p>
            <p>{props.type}</p>
            <p>{props.operatorName}</p>
        </TransactionContainer>
    )
}

Transactions.propTypes = {
    date: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    operatorName: PropTypes.string.isRequired
  };