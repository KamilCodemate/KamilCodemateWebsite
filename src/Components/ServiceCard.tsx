import React from 'react';
import { IconType } from 'react-icons';
import './ComponentStyles/ServiceCard.scss';
interface ServiceCardProps {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className='card'>
      <div className='card-icon'>
        <Icon size={80} />
      </div>
      <div className='card-title'>{title}</div>
      <div className='card-description'>{description}</div>
    </div>
  );
};

export default ServiceCard;
