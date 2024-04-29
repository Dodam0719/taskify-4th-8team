import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { CHIP_COLORS } from '../chips/color-chips/ColorChips';
import * as S from './ModalInputTag.style';

interface FormValues {
  tagInput: string;
}

interface TagType {
  id: string;
  text: string;
  color: string;
}
interface ModalInputTagProps {
  onTagChange: (title: string[]) => void;
}
const ModalInputTag = ({ onTagChange }: ModalInputTagProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();
  const [tags, setTags] = useState<TagType[]>([]);

  const onSubmit = ({ tagInput }: FormValues) => {
    const trimmedInput = tagInput.trim();
    if (!trimmedInput) {
      // 입력값이 비어 있으면 에러 설정
      setError('tagInput', {
        type: 'manual',
        message: '태그는 비어 있을 수 없습니다.',
      });
      return;
    }

    if (tags.some((tag) => tag.text.toLowerCase() === trimmedInput.toLowerCase())) {
      setError('tagInput', {
        type: 'manual',
        message: '중복된 태그는 입력할 수 없습니다.',
      });
      return;
    }

    if (tags.length >= 5) {
      // 태그가 5개 이상이면 에러 설정
      setError('tagInput', {
        type: 'manual',
        message: '태그는 최대 5개까지만 추가할 수 있습니다.',
      });
      return;
    }

    if (tagInput && tagInput.trim().length > 0) {
      // 랜덤 색상 선택
      const randomColorIndex = Math.floor(Math.random() * CHIP_COLORS.length);
      const newTag = {
        id: uuidv4(),
        text: tagInput,
        color: CHIP_COLORS[randomColorIndex],
      };
      setTags((prevTags) => [...prevTags, newTag]);
      setValue('tagInput', '');
      clearErrors('tagInput');
      const allTagTexts = [...tags, newTag].map((tag) => tag.text);
      onTagChange(allTagTexts);
    }
  };

  const removeTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <S.ModalInputTagWrapper>
      <S.ModalInputTagLabel htmlFor='title'>태그</S.ModalInputTagLabel>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.ModalInputTagContainer>
          <S.TagList>
            {tags.map((tag) => (
              <S.TagStyle key={tag.id} color={tag.color} onClick={() => removeTag(tag.id)}>
                {tag.text}
              </S.TagStyle>
            ))}
          </S.TagList>
          <S.ModalInputTagInput id='tag' {...register('tagInput')} placeholder={tags.length < 5 ? '태그 입력 후 Enter' : ''} />
        </S.ModalInputTagContainer>
        {errors.tagInput && <S.ModalInputTagErrorMessage>{errors.tagInput.message}</S.ModalInputTagErrorMessage>}
      </form>
    </S.ModalInputTagWrapper>
  );
};

export default ModalInputTag;
