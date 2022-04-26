import './sectionheader.css';
import PropTypes from 'prop-types';

function SectionHeader({ children }) {
  return (
    <h3 type={'title'} className={`section-title`}>
      {children}
    </h3>
  );
}

SectionHeader.defaultProps = {
  type: 'title',
  className: 'section-title',
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
