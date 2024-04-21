import styles from './AllStyles.module.scss';

const IconSocial = () => {
  return (
    <div className={styles['social']}>
      <a className={styles['social__link']} href="#!">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 18.75C15.9518 18.75 18.75 15.9518 18.75 12.5C18.75 9.04822 15.9518 6.25 12.5 6.25C9.04822 6.25 6.25 9.04822 6.25 12.5C6.25 15.9518 9.04822 18.75 12.5 18.75ZM12.5 16.6667C14.8011 16.6667 16.6667 14.8011 16.6667 12.5C16.6667 10.1988 14.8011 8.33333 12.5 8.33333C10.1988 8.33333 8.33333 10.1988 8.33333 12.5C8.33333 14.8011 10.1988 16.6667 12.5 16.6667Z"
            fill="currentColor"
          />
          <path
            d="M18.75 5.20801C18.1747 5.20801 17.7083 5.67438 17.7083 6.24967C17.7083 6.82497 18.1747 7.29134 18.75 7.29134C19.3253 7.29134 19.7917 6.82497 19.7917 6.24967C19.7917 5.67438 19.3253 5.20801 18.75 5.20801Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.72286 4.45456C1.04166 5.7915 1.04166 7.54167 1.04166 11.042V13.9587C1.04166 17.459 1.04166 19.2092 1.72286 20.5461C2.32207 21.7221 3.2782 22.6782 4.45422 23.2774C5.79117 23.9587 7.54133 23.9587 11.0417 23.9587H13.9583C17.4586 23.9587 19.2088 23.9587 20.5457 23.2774C21.7218 22.6782 22.6779 21.7221 23.2771 20.5461C23.9583 19.2092 23.9583 17.459 23.9583 13.9587V11.042C23.9583 7.54167 23.9583 5.7915 23.2771 4.45456C22.6779 3.27853 21.7218 2.32241 20.5457 1.7232C19.2088 1.04199 17.4586 1.04199 13.9583 1.04199H11.0417C7.54133 1.04199 5.79117 1.04199 4.45422 1.7232C3.2782 2.32241 2.32207 3.27853 1.72286 4.45456ZM13.9583 3.12533H11.0417C9.25712 3.12533 8.044 3.12695 7.10632 3.20355C6.19295 3.27818 5.72587 3.41344 5.40003 3.57946C4.61602 3.97894 3.9786 4.61636 3.57913 5.40037C3.4131 5.7262 3.27784 6.19328 3.20322 7.10666C3.12661 8.04434 3.12499 9.25745 3.12499 11.042V13.9587C3.12499 15.7432 3.12661 16.9563 3.20322 17.894C3.27784 18.8074 3.4131 19.2745 3.57913 19.6003C3.9786 20.3843 4.61602 21.0217 5.40003 21.4212C5.72587 21.5872 6.19295 21.7225 7.10632 21.7971C8.044 21.8737 9.25712 21.8753 11.0417 21.8753H13.9583C15.7429 21.8753 16.9559 21.8737 17.8936 21.7971C18.8071 21.7225 19.2742 21.5872 19.6 21.4212C20.3839 21.0217 21.0213 20.3843 21.4208 19.6003C21.5869 19.2745 21.7222 18.8074 21.7968 17.894C21.8733 16.9563 21.875 15.7432 21.875 13.9587V11.042C21.875 9.25745 21.8733 8.04434 21.7968 7.10666C21.7222 6.19328 21.5869 5.7262 21.4208 5.40037C21.0213 4.61636 20.3839 3.97894 19.6 3.57946C19.2742 3.41344 18.8071 3.27818 17.8936 3.20355C16.9559 3.12695 15.7429 3.12533 13.9583 3.12533Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a className={styles['social__link']} href="#!">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.893 12.3048C14.5023 12.1579 14.5023 11.597 14.4781 11.2063C14.3805 9.81494 14.8687 7.69072 14.2828 6.7876C13.868 6.2501 11.8656 6.29932 10.6453 6.37275C10.3031 6.42197 9.88827 6.49463 9.5953 6.6415C9.30233 6.78838 9.00937 7.03213 9.00937 7.25166C9.00937 7.56885 9.74218 7.52041 10.0101 7.93525C10.3031 8.3751 10.3031 9.32666 10.3031 10.1079C10.3031 11.011 10.1562 12.2079 9.79062 12.2563C9.2289 12.2806 8.91171 11.7188 8.61874 11.304C8.0328 10.4985 7.44687 9.49697 7.00702 8.52041C6.78749 8.00791 6.66483 7.44619 6.34765 7.22666C5.85937 6.88447 4.98046 6.86025 4.12577 6.88447C3.34452 6.90869 2.22109 6.81104 2.00155 7.2751C1.83046 7.7876 2.19687 8.27588 2.39218 8.6915C3.39296 10.8642 4.46718 12.7688 5.78593 14.5751C7.00702 16.2595 8.1539 17.6024 10.4 18.3103C11.0351 18.5056 13.818 19.0673 14.3797 18.3103C14.575 18.0173 14.5266 17.3579 14.6242 16.8696C14.7219 16.3813 14.8437 15.8931 15.3078 15.8688C15.6984 15.8446 15.918 16.186 16.1625 16.4306C16.4312 16.6993 16.6508 16.9188 16.8461 17.1634C17.3101 17.6274 17.7984 18.2618 18.3844 18.5063C19.1898 18.8485 20.4351 18.7509 21.607 18.7017C22.5594 18.6774 23.243 18.4821 23.3164 17.9204C23.3656 17.4806 22.8766 16.8462 22.5836 16.4798C21.8508 15.5767 21.5094 15.3079 20.6789 14.4774C20.3125 14.111 19.8484 13.7204 19.8484 13.2813C19.8242 13.0126 20.0437 12.7688 20.2391 12.5001C21.0937 11.2306 21.9484 10.3274 22.7297 9.00869C22.9492 8.61807 23.4625 7.71494 23.2672 7.2751C23.0476 6.78682 21.8266 6.93291 21.0695 6.93291C20.093 6.93291 18.8234 6.85947 18.5789 7.05478C18.1148 7.37197 17.9195 7.88525 17.7 8.37354C17.2117 9.49697 16.5523 10.6438 15.8687 11.4985C15.6242 11.7915 15.1609 12.4017 14.8922 12.304L14.893 12.3048Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a className={styles['social__link']} href="#!">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3742 4.81501L20.0734 20.3814C19.8242 21.4799 19.175 21.7533 18.2523 21.2361L13.2227 17.5299L10.7961 19.8642C10.5273 20.133 10.3031 20.3572 9.78515 20.3572L10.1469 15.2353L19.468 6.81267C19.8734 6.45173 19.3797 6.25095 18.8383 6.61266L7.31484 13.8689L2.3539 12.3158C1.275 11.9791 1.25547 11.2369 2.5789 10.7189L21.9828 3.24313C22.8812 2.90642 23.6672 3.44235 23.3742 4.81501Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default IconSocial;
