import { type StrictStyleOptions } from './StyleOptions';
import type StyleOptions from './StyleOptions';
import defaultStyleOptions from './defaultStyleOptions';
import Composer, { type ComposerProps } from './hooks/Composer';
import * as hooks from './hooks/index';
import {
  SendBoxMiddlewareProxy,
  initSendBoxMiddleware,
  type SendBoxMiddleware,
  type SendBoxMiddlewareProps,
  type SendBoxMiddlewareRequest
} from './hooks/internal/SendBoxMiddleware';
import {
  SendBoxToolbarMiddlewareProxy,
  initSendBoxToolbarMiddleware,
  type SendBoxToolbarMiddleware,
  type SendBoxToolbarMiddlewareProps,
  type SendBoxToolbarMiddlewareRequest
} from './hooks/internal/SendBoxToolbarMiddleware';
import concatMiddleware from './hooks/middleware/concatMiddleware';
import { type ActivityStatusRenderer } from './hooks/useCreateActivityStatusRenderer'; // TODO: [P1] This line should export the one from the version from "middleware rework" workstream.
import { type DebouncedNotification, type DebouncedNotifications } from './hooks/useDebouncedNotifications';
import { type PostActivityFile } from './hooks/useSendFiles';
import { localize } from './localization/Localize';
import normalizeStyleOptions from './normalizeStyleOptions';
import type ActivityMiddleware from './types/ActivityMiddleware';
import { type ActivityComponentFactory } from './types/ActivityMiddleware';
import { type ActivityStatusMiddleware, type RenderActivityStatus } from './types/ActivityStatusMiddleware';
import { type AttachmentForScreenReaderComponentFactory } from './types/AttachmentForScreenReaderMiddleware';
import type AttachmentForScreenReaderMiddleware from './types/AttachmentForScreenReaderMiddleware';
import type AttachmentMiddleware from './types/AttachmentMiddleware';
import { type RenderAttachment } from './types/AttachmentMiddleware';
import type AvatarMiddleware from './types/AvatarMiddleware';
import { type AvatarComponentFactory } from './types/AvatarMiddleware';
import type CardActionMiddleware from './types/CardActionMiddleware';
import { type PerformCardAction } from './types/CardActionMiddleware';
import { type ContextOf } from './types/ContextOf';
import type GroupActivitiesMiddleware from './types/GroupActivitiesMiddleware';
import { type GroupActivities } from './types/GroupActivitiesMiddleware';
import { type Notification } from './types/Notification';
import type ScrollToEndButtonMiddleware from './types/ScrollToEndButtonMiddleware';
import { type ScrollToEndButtonComponentFactory } from './types/ScrollToEndButtonMiddleware';
import { type SendStatus } from './types/SendStatus';
import type ToastMiddleware from './types/ToastMiddleware';
import { type RenderToast } from './types/ToastMiddleware';
import { type Typing } from './types/Typing';
import type TypingIndicatorMiddleware from './types/TypingIndicatorMiddleware';
import { type RenderTypingIndicator } from './types/TypingIndicatorMiddleware';
import { type WebSpeechPonyfill } from './types/WebSpeechPonyfill';
import { type WebSpeechPonyfillFactory } from './types/WebSpeechPonyfillFactory';

const buildTool = process.env.build_tool;
const moduleFormat = process.env.module_format;
const version = process.env.npm_package_version;

const buildInfo = { buildTool, moduleFormat, version };

export {
  Composer,
  SendBoxMiddlewareProxy,
  SendBoxToolbarMiddlewareProxy,
  buildInfo,
  concatMiddleware,
  defaultStyleOptions,
  hooks,
  initSendBoxMiddleware,
  initSendBoxToolbarMiddleware,
  localize,
  normalizeStyleOptions,
  version
};

export type {
  ActivityComponentFactory,
  ActivityMiddleware,
  ActivityStatusMiddleware,
  ActivityStatusRenderer,
  AttachmentForScreenReaderComponentFactory,
  AttachmentForScreenReaderMiddleware,
  AttachmentMiddleware,
  AvatarComponentFactory,
  AvatarMiddleware,
  CardActionMiddleware,
  ComposerProps,
  ContextOf,
  DebouncedNotification,
  DebouncedNotifications,
  GroupActivities,
  GroupActivitiesMiddleware,
  Notification,
  PerformCardAction,
  PostActivityFile,
  RenderActivityStatus,
  RenderAttachment,
  RenderToast,
  RenderTypingIndicator,
  ScrollToEndButtonComponentFactory,
  ScrollToEndButtonMiddleware,
  SendBoxMiddleware,
  SendBoxMiddlewareProps,
  SendBoxMiddlewareRequest,
  SendBoxToolbarMiddleware,
  SendBoxToolbarMiddlewareProps,
  SendBoxToolbarMiddlewareRequest,
  SendStatus,
  StrictStyleOptions,
  StyleOptions,
  ToastMiddleware,
  Typing,
  TypingIndicatorMiddleware,
  WebSpeechPonyfill,
  WebSpeechPonyfillFactory
};
