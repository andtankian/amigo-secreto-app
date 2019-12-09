/**
 *
 * Profile
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useVerticalNavbarController } from '@redwallsolutions/vertical-navbar-component-module';
import { Form, InputField } from '@redwallsolutions/form-component-module';
import Card from '@redwallsolutions/card-component-module';
import Button from '@redwallsolutions/button-component-module';
import Skeleton from '@redwallsolutions/skeleton-loader-component-module';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import Fluid from '../../components/List/Fluid';
import Title from './Title';
import { loadProfile, updateProfile } from './actions';
import SuggestionsPlace from '../../components/SuggestionsPlace/Loadable';

export function Profile({ dispatch, page: { profile, saveButtonLoading } }) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  const navbarController = useVerticalNavbarController();

  useEffect(() => {
    navbarController.setActiveItem(3);
    navbarController.startLoading();
    dispatch(loadProfile(1));
  }, []);

  useEffect(() => {
    if (profile) {
      navbarController.finishLoading();
    }
  }, [profile]);

  const saveProfile = data => {
    dispatch(updateProfile(data));
  };

  return (
    <div>
      <Helmet>
        <title>Meu Perfil</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="container-fluid">
        <div className="mt-3 mb-3">
          <Fluid order={1}>
            <Card shouldFitContainer>
              <div className="row">
                <div className="col-12">
                  <Title>Meu Perfil</Title>
                </div>
                <div className="col-12">
                  <Form onSubmit={saveProfile}>
                    {profile && (
                      <InputField
                        field="id"
                        type="hidden"
                        initialValue={profile.id}
                      />
                    )}
                    <div className="row">
                      <div className="col-md-6">
                        {profile ? (
                          <InputField
                            field="fullName"
                            label="Nome Completo"
                            initialValue={profile.fullName}
                            required
                            shouldFitContainer
                          />
                        ) : (
                          <Skeleton height={40} />
                        )}
                      </div>
                      <div className="col-md-6">
                        {profile ? (
                          <InputField
                            field="username"
                            label="Apelido"
                            initialValue={profile.username}
                            required
                            shouldFitContainer
                          />
                        ) : (
                          <Skeleton height={40} />
                        )}
                      </div>
                      <div className="col-12">
                        <Title>Minhas Sugestões</Title>
                      </div>
                      <div className="col-md-12">
                        {profile ? (
                          <SuggestionsPlace suggestions={profile.suggestions} />
                        ) : null}
                      </div>
                      <div className="col-md-12 mt-5">
                        <div className="row justify-content-end">
                          <div className="col-md-3">
                            <Button
                              shouldFitContainer
                              type="submit"
                              isLoading={saveButtonLoading}
                            >
                              Salvar Alterações
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </Card>
          </Fluid>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  page: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Profile);
