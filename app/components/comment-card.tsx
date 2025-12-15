/* eslint-disable @next/next/no-img-element */

type CommentCardProps = {
  data: {
    avatar: string;
    comment: string;
    name: string;
    startNumber: number;
  };
};

export const CommentCard = (props: CommentCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content-wrapper">
        <div className="testimonial-info">
          <div className="reviewer-header">
            <img
              className="reviewer-avatar"
              src={props.data.avatar}
              alt="Ảnh đại diện"
            />

            <div className="reviewer-details">
              <p className="reviewer-name">{props.data.name}</p>

              <div className="reviewer-rating">
                {Array.from({ length: props.data.startNumber }, (_, index) => (
                  <span className="star" key={index}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="reviewer-comment">
            {props.data.comment}
          </blockquote>
        </div>
      </div>
    </div>
  );
};
