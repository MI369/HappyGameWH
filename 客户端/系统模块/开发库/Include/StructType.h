
//
#define SIZE_AUDIO_FRAME 960
#define SIZE_AUDIO_PACKED 60
#define SIZE_AUDIO_PACKED_MP3  590

#define SIZE_FILE_PACKED  1024   //1K�ļ�������

typedef struct
{
	short flag;
	BYTE session;
	BYTE id;
	
	BYTE cmd;
	BYTE type;//0��ʼ�� 1������
	BYTE ext;
	unsigned short data_size_extra;
}PACK_CMD;


//�ļ��������ݰ��������ļ����ݣ�
typedef struct
{
	short flag;//����
	BYTE session;
	BYTE  id;//���0--->��
	unsigned short data_size;//���ݴ�С
	
	BYTE data[SIZE_FILE_PACKED];//�ļ�����
	
}PACK_FILE;

//��Ƶ���ݰ���������Ƶ���ݣ�
typedef struct
{
	short flag;
	BYTE session;
	BYTE  id;
	//Add by 2005-10-22
	BYTE video_show_position;//��Ƶ��ʾλ��0,1,2.....
	
	int roomID;//�����
	int sendPlayerID;//������ID	
	int deskID;//�����˵�DESK ID

	BYTE data[SIZE_AUDIO_PACKED];
	//	BYTE data[SIZE_AUDIO_PACKED_MP3];
	
}PACK_AUDIO;

//��Ƶ���ݰ�����������Ƶ���ݣ�
typedef struct
{
	short flag;
	BYTE session;
	BYTE id;
	BYTE subid;
	BYTE key; //whether key frame
	unsigned int data_size_total;
	unsigned short data_size;
	//Add by 2005-10-22
	BYTE video_show_position;//��Ƶ��ʾλ��0,1,2.....

	int roomID;//�����
	int sendPlayerID;//������ID	
	int deskID;//�����˵�DESK ID

	//һ�㲻ʹ��,ֻ��ת��ʱ�����
	char toIPStr[20];//Ŀ��IP
	int toPortInt;//Ŀ��˿�
	
}PACK_VIDEO;

//MP3 DATA����������Ƶ���ݣ�
typedef struct
{
	short flag;
	BYTE session;
	BYTE id;
	BYTE subid;
	BYTE key; //whether key frame
	unsigned int data_size_total;
	unsigned short data_size;
	//Add by 2005-10-22
	//	BYTE video_show_position;//��Ƶ��ʾλ��0,1,2.....
	
	
}PACK_MP3_DATA;


//�豸֧���б�
typedef struct
{
	bool bVideoIn;  //��Ƶ�ɼ�
	bool bVideoOut; //��Ƶ���
	bool bAudioIn;  //�����ɼ�
	bool bAudioOut;  //�������
	bool bVideoCodec;//��Ƶ����
	bool bAudioCodec;//��������
}DEVICE_SUPPORT;

#define CPARAM_QCIF 0

#define CPARAM_INTER TRUE
#define CPARAM_INTRA FALSE

typedef struct compression_parameters 
{
/* Contains all the parameters that are needed for 
   encoding plus all the status between two encodings */
  int half_pixel_searchwindow; /* size of search window in half pixels
				  if this value is 0, no search is performed
				*/
  int format;			/*  */
  int pels;			/* Only used when format == CPARAM_OTHER */
  int lines;			/* Only used when format == CPARAM_OTHER */
  int inter;			/* TRUE of INTER frame encoded frames,
				   FALSE for INTRA frames */
  int search_method;		/* DEF_EXHAUSTIVE or DEF_LOGARITHMIC */
  int advanced_method;		/* TRUE : Use array to determine 
				          macroblocks in INTER frame
					  mode to be encoded */
  int Q_inter;			/* Quantization factor for INTER frames */
  int Q_intra;			/* Quantization factor for INTRA frames */
  unsigned int *data;		/* source data in qcif format */
  unsigned int *interpolated_lum;	/* intepolated recon luminance part */
  unsigned int *recon;		/* Reconstructed copy of compressed frame */
  int *EncodeThisBlock; 
                                /* Array when advanced_method is used */
} CParam;

/* Structure for counted bits */
typedef struct bits_counted
 {
  int Y;
  int C;
  int vec;
  int CBPY;
  int CBPCM;
  int MODB;
  int CBPB;
  int COD;
  int header;
  int DQUANT;
  int total;
  int no_inter;
  int no_inter4v;
  int no_intra;
/* NB: Remember to change AddBits(), ZeroBits() and AddBitsPicture() 
   when entries are added here */
} Bits;
