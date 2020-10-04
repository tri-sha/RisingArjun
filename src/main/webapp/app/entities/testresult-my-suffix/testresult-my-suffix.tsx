import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './testresult-my-suffix.reducer';
import { ITestresultMySuffix } from 'app/shared/model/testresult-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestresultMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestresultMySuffix extends React.Component<ITestresultMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testresultList, match } = this.props;
    return (
      <div>
        <h2 id="testresult-my-suffix-heading">
          <Translate contentKey="risingarjunApp.testresult.home.title">Testresults</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="risingarjunApp.testresult.home.createLabel">Create new Testresult</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testresultList && testresultList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.positiveMarks">Positive Marks</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.negativeMarks">Negative Marks</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.score">Score</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.timeTaken">Time Taken</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.date">Date</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.student">Student</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.testresult.testPaperId">Test Paper Id</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testresultList.map((testresult, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testresult.id}`} color="link" size="sm">
                        {testresult.id}
                      </Button>
                    </td>
                    <td>{testresult.positiveMarks}</td>
                    <td>{testresult.negativeMarks}</td>
                    <td>{testresult.score}</td>
                    <td>{testresult.timeTaken}</td>
                    <td>
                      <TextFormat type="date" value={testresult.date} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      {testresult.studentStudentRegId ? (
                        <Link to={`student-my-suffix/${testresult.studentId}`}>{testresult.studentStudentRegId}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testresult.testPaperIdId ? (
                        <Link to={`testpaper-my-suffix/${testresult.testPaperIdId}`}>{testresult.testPaperIdId}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testresult.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testresult.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testresult.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="risingarjunApp.testresult.home.notFound">No Testresults found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testresult }: IRootState) => ({
  testresultList: testresult.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestresultMySuffix);