import React, {useState} from 'react';
import {values} from 'ramda';
import {MovieDetailTabs} from '../../constants/constants.js';
import {DescriptionTabs} from './components/description-tabs.jsx';
import OverviewTab from './components/overview-tab.jsx';
import DetailTab from './components/detail-tab.jsx';
import ReviewsTab from './components/reviews-tab.jsx';

export const MovieDescription = () => {
  const tabs = values(MovieDetailTabs);
  const defaultTab = tabs[0];
  const [tab, setTab] = useState(defaultTab);
  const handleTabClick = (e) => setTab(e.currentTarget.name);
  return (
    <div className="movie-card__desc">
      <DescriptionTabs tab={tab} onHandleTabClick={handleTabClick} />
      {tab === MovieDetailTabs.OVERVIEW && <OverviewTab />}
      {tab === MovieDetailTabs.DETAILS && <DetailTab />}
      {tab === MovieDetailTabs.REVIEWS && <ReviewsTab />}
    </div>
  );
};
