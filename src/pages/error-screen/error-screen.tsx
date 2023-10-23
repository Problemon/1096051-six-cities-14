import { Link } from 'react-router-dom';
import { PagePaths } from '../../const';
import { Helmet } from 'react-helmet-async';

function ErrorScreen(): JSX.Element {
  return (
    <main className="page__main page__main--error">
      <Helmet title="404"></Helmet>
      <h1 className="page__title" style={
        {
          textAlign: 'center'
        }
      }
      >Error 404. Page not found.
      </h1>
      <Link to={PagePaths.MAIN} style={
        {
          display: 'block',

          fontSize: '30px',
          textAlign: 'center',
          textDecoration: 'underline',
          color: '#5FB6FF',
        }
      }
      >Main page
      </Link>
    </main>
  );
}

export { ErrorScreen };
