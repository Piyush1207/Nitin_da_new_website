export const personalData = {
  name: 'Dr. Nitin Satpute',
  title: 'Principal Cloud Architect – HPC/GPU & AI Platform Solutions',
  email: 'nitin.satpute@oracle.com',
  quote: 'Exploring, Evaluating and Establishing.',
  bio: 'I am an AI and GPU Infrastructure Specialist at Oracle, Dubai, with a PhD in Computer Science from the University of Córdoba, Spain, under the Marie-Curie ESR Fellowship. I hold an M.E. in Embedded Systems from BITS Pilani. My expertise includes large language models (LLMs), high-performance computing (HPC), GPU programming with CUDA, and distributed AI. I have contributed to deep spiking neural networks, medical image analysis, and generative AI using Falcon, LLaMA, LangChain, and Hugging Face. I\'ve worked at prestigious institutions like the Indian Institute of Science (IISc) Bangalore, University of Siena, NTNU, Oslo University Hospital, and Aarhus University. My research focuses on cutting-edge AI and neural computing.',
  github: 'https://github.com/nitinsatpute',
  linkedin: 'https://linkedin.com/in/nitinsatpute',
  youtube: 'https://youtube.com/@nitinsatpute'
};

export const experiences = [
  {
    id: 1,
    company: 'Oracle Corporation',
    position: 'Principal Cloud Architect – HPC/GPU & AI Platform Solutions',
    duration: 'Sep 2025 - Present',
    location: 'Dubai, UAE',
    description:
      'Architect and deliver large-scale GPU/HPC and AI solutions on Oracle Cloud Infrastructure, driving innovation from proof of concept to production.',
    technologies: ['Infrastructure as Code (IaC)', 'Terraform', 'Docker', 'Slurm', 'Kubernetes', 'NIM', 'NeMo', 'Ray for Cluster', 'vLLM', 'OKE (Oracle Kubernetes Engine)']
  },
  {
    id: 2,
    company: 'Oracle Corporation',
    position: 'AI/GPU Infra Specialist(OCI GPU Black Belt)',     
    duration: 'May 2024 - Sep 2025',
    location: 'Dubai, UAE',
    description: 'Distributed Training & Scalable Deployment of LLMs using NVIDIA GPUs on Oracle Kubernetes Engine.',
    technologies: ['AI' ,'NVIDIA GPUs', 'Terraform', 'Vllm', 'Grafana', 'Python', 'Slurm', 'Ray'] 
  },
  {
    id: 3,
    company: 'Technology Innovation Institute',
    position: 'Senior ML Engineer',
    duration: 'Apr 2021 - Apr 2024',
    location: 'Abu Dhabi, UAE',
    description:
      'Worked on Multi-modal Generative Models, LLMs, and GPU Acceleration.',
    technologies: ['AI', 'GPU', 'Distributed Training', 'Inference', 'Deep Learning', 'Spiking Neural Networks']
  },
  {
    id: 4,
    company: 'Aarhus University',
    position: 'Researcher in Machine Learning and Computational Intelligence',
    duration: 'Oct 2020 - Mar 2021',
    location: 'Aarhus, Denmark',
    description:
      'Research on multimodal data analytics for smart cities environments.',
    technologies: ['AI', 'GPU', 'Distributed Training', 'Inference']
  },
  {
    id: 5,
    company: 'University of Córdoba',
    position: 'Marie Curie Researcher in GPU Picasso Optimization',
    duration: 'Jun 2017 - Aug 2020',
    location: 'Córdoba, Spain',
    description:
      'Thesis: GPU Acceleration for Liver Enhancement and Segmentation.',
    technologies: ['Linux', 'C++', 'CUDA', 'OpenCL', 'Python', 'NVIDIA GPUs']
  }
];

export const projects = [
   // ---------------- Oracle Corporation ----------------
   {
    id: 1,
    title: 'Scaling SGLang on Oracle Kubernetes Engine with RDMA-Connected H100 GPUs', 
    description: 'Discover how to scale SGLang on Oracle Kubernetes Engine using RDMA-connected H100 GPUs for ultra-fast, low-latency LLM inference.',
    tech: ['OKE', 'OCI', 'H100', 'RDMA', 'SGLang', 'LLM', 'AI'],
    link: 'https://www.youtube.com/watch?v=CfjoQWAMECQ',
    organization: 'Oracle Corporation',
    year: 'November 2025'   
   },
   {
    id: 2,
    title: 'Serving Llama-4-Scout-17B-16E-Instruct on Oracle Kubernetes Engine with NVIDIA NIM', 
    description: 'Learn how NVIDIA NIM simplifies Llama-4-Scout-17B-16E-Instruct deployment on Oracle Kubernetes Engine with the power of NVIDIA Tensor Core H100 GPUs.',
    tech: ['OKE', 'OCI', 'NIM', 'Kubernetes', 'LLM', 'H100', 'Llama4', 'AI', 'NVIDIA'],
    link: 'https://www.youtube.com/watch?v=Stpw6lCyfFg',
    organization: 'Oracle Corporation',
    year: 'November 2025'
   },
   {
    id: 3,
    title: 'Running vLLM on Oracle Kubernetes Engine with RDMA-Connected H100 GPUs', 
    description: 'Learn how vLLM on Oracle Kubernetes Engine harnesses RDMA-connected H100 GPUs for efficient batching and high-performance LLM serving',
    tech: ['vLLM', 'SGLang', 'NIM', 'OKE', 'OCI', 'H100', 'RDMA', 'AI', 'LLM', 'Inference', 'Kubernetes', 'GPU'],
    link: 'https://www.youtube.com/watch?v=Zg6hZwRB1XA',
    organization: 'Oracle Corporation',
    year: 'November 2025'
   },
  {
    id: 4,
    title: 'Distributed LLM Training and Scalable AI Inference on NVIDIA GPUs',
    description:
      'Scalable infrastructure for training large language models across multiple NVIDIA GPUs on Oracle Cloud Infrastructure. Implemented distributed training strategies with efficient memory management and gradient synchronization.',
    tech: ['CUDA', 'Python', 'OCI', 'Kubernetes', 'PyTorch', 'Distributed Training'],
    link: 'https://youtu.be/rakx04ystns?si=njA_X8bRFjwc-PU9&t=1548',
    organization: 'Oracle Corporation',
    year: 'June 2025'
  },
  {
    id: 5,
    title: 'Unlocking the Future – Leveraging NVIDIA GPUs on OCI for Digital Human Creation',
    description:
      'Discover how to create real-time, AI-powered digital humans using NVIDIA Audio2Face on Oracle Cloud Infrastructure (OCI). This video showcases how OC’s scalable GPU power and NVIDI’s AI models deliver lifelike facial animation synchronized with speech—perfect for gaming, virtual assistants, and immersive AI experience.',
    tech: ['PyTorch', 'Computer Vision', 'NLP', 'HuggingFace', 'Transformers'],
    link: 'https://youtu.be/02XnJFrdxws?si=EWmQ_zdZZSDkoiLi',
    organization: 'Oracle Corporation',
    year: 'May 2025'
  },
  {
    id: 6,
    title: 'Deploying LLaMA 3 8B Instruct on OKE with NVIDIA NIM and A10 GPUs',
    description:
      'In this video, we walk through deploying the LLaMA 3 8B Instruct model on Oracle Kubernetes Engine (OKE) 🐳 using the NVIDIA Inference Microservice (NIM) Operator ⚙️, powered by A10 Tensor Core GPUs from NVIDIA 💻⚡ for optimized performance.',
    tech: ['CUDA', 'C++', 'Neural Networks', 'GPU Computing', 'Optimization'],
    link: 'https://youtu.be/Od6xlWQH0d4?si=SMDoMfCAELhuZwNI',
    organization: 'Oracle Corporation',
    year: 'April 2025'
  },
  {
    id: 7,
    title: 'Integrating NIM on OKE for LLM Deployments on NVIDIA GPUs',
    description:
      'This video shows how to integrate NVIDIA Inference Microservice (NIM) on Oracle Kubernetes Engine (OKE) for deploying Large Language Models (LLMs) on NVIDIA GPUs.',
    tech: ['PyTorch', 'OpenCV', 'Medical Imaging', 'Deep Learning', 'CUDA'],
    link: 'https://youtu.be/Dy6ak3JSNvM?si=ChuVYANz44YrMqvJ',
    organization: 'Oracle Corporation',
    year: 'April 2025'
  },
  // {
  //   id: 8,
  //   title: 'Scaling DeepSeek‑R1 and Distilled Models with NVIDIA Tensor Core H100 GPUs',
  //   description: 'This video explores the deployment of DeepSeek-R1  (16xH100 GPUs) and its distilled variants DeepSeek-R1-Distill-Llama-70B (2xH100 GPUs) and DeepSeek-R1-Distill-Qwen-32B  (1xH100 GPUs) on Oracle Cloud Infrastructure (OCI) using NVIDIA H100 Tensor Core GPUs. We leverage Slurm to orchestrate a Ray cluster, enabling distributed inference, while vLLM ensures efficient model serving. This setup maximizes performance, scalability, and cost-effectiveness for large-scale AI workloads.',
  //   tech: ['Python', 'Slurm', 'Docker', 'Kubernetes', 'Ray', 'HPC'],
  //   link: '#',
  //   organization: 'Oracle Corporation',
  //   year: '2025'
  // },
  {
    id: 9,
    title: 'Accelerating LLaMA 3 Inference: NIM Operator on OKE with Tensor Core NVIDIA H100 GPUs',
    description:
      'Learn how to optimize LLaMA 3 inference using the NIM Operator on Oracle Kubernetes Engine (OKE) with NVIDIA H100 Tensor Core GPUs.',
    tech: ['Python', 'TensorFlow', 'IoT', 'Real-time Analytics', 'Edge Computing'],
    link: 'https://youtu.be/UsXy_QZPEJo?si=4Xw-ZlyDF8J_-18T',
    organization: 'Oracle Corporation',
    year: 'March 2025'
  },
  // {
  //   id: 10,
  //   title: 'Accelerating DeepSeek‑V3 with 16 NVIDIA Tensor Core H100 GPUs',
  //   description: '“Accelerating DeepSeek-V3 with 16 NVIDIA Tensor Core H100 GPUs on OCI" explores the deployment and optimization of the DeepSeek-V3 model on Oracle Cloud Infrastructure (OCI) utilizing 16 state-of-the-art NVIDIA H100 Tensor Core GPUs. This setup enhances the computational efficiency, allowing for faster model inference. The article dives into the challenges of scaling AI workloads, and the performance improvements brought by the H100 GPUs, which are specifically designed for LLM workloads. By leveraging OCIs flexible cloud infrastructure and cutting-edge GPU technology, this deployment pushes the boundaries of AI research and application.',
  //   tech: ['PyTorch', 'Transformers', 'Model Optimization', 'Fine-tuning', 'CUDA'],
  //   link: '#',
  //   organization: 'Oracle Corporation',
  //   year: '2025'
  // },
  {
    id: 11,
    title: 'Supercharging AI: Meta Llama-3.3-70B Meets OKE Cluster Accelerated by 8xNVIDIA A10 Tensor Core GPUs',
    description:
      'In this video, discover how to deploy Llama-3.3-70B-instruct on an Oracle Kubernetes Engine (OKE) cluster accelerated by 8xNVIDIA A10 Tensor Core GPUs.',
    tech: ['Verilog', 'FPGA', 'Video Processing', 'Hardware Design', 'Embedded Systems'],
    link: 'https://youtu.be/X5yumLz6IUk?si=IApc-DFDcLVWSkmI',
    organization: 'Oracle Corporation',
    year: 'January 2025'
  },
  {
    id: 12,
    title: 'Unleashing LLaMA 3.1 70B on Oracle Kubernetes Engine with A100 GPUs',
    description:
      'Discover how to deploy the powerful LLaMA 3.1 70B model on Oracle Kubernetes Engine (OKE) with A100 GPUs for scalable and efficient AI workloads.',
    tech: ['Oracle Cloud', 'AI', 'NVIDIA GPUs'],
    link: 'https://youtu.be/YHpElMO4UUI?si=4dXIV33YhwwSjzXX',
    organization: 'Oracle Corporation',
    year: 'December 2024'
  },
  {
    id: 13,
    title: 'Deploying LLaMA and Gemma‑Instruct models on OCI Infrastructure with NVIDIA A10 GPUs',
    description:
      'In this video, we walk through the process of deploying LLaMA3/3.1 (8B and 70B)-instruct and Gemma2 9B-instruct models on Oracle Cloud Infrastructure (OCI) using NVIDIA A10 GPUs.',
    tech: ['Oracle Cloud', 'AI', 'Video Analytics'],
    link: 'https://youtu.be/37Pi2-OAE28?si=HrzHSnI6dyyfn39h',
    organization: 'Oracle Corporation',
    year: 'October 2024'
  },
   // ---------------- TII ----------------
  {
    id: 14,
    title: "Video-Falcon: Multi-modal Generative Model",
    description: "Developed Video-Falcon, a multi-modal (Image+Video+Sound) generative model inspired by Video-LLaMA.",
    tech: ["LangChain", "Transformers", "Hugging Face", "Bitsandbytes"],
    link: "https://github.com/Crypto-TII",
    organization: "Technology Innovation Institute (TII)",
    year: "2023"
  },
  {
    id: 15,
    title: "Quantization of LLaMA and Falcon Models",
    description: "Reduced LLaMA-7B model size from 14GB (FP16) to 3.5GB (4-bit), achieving 75% compression.",
    tech: ["LLMs", "Quantization", "Falcon", "LLaMA"],
    link: "https://arxiv.org/abs/2302.06746",
    organization: "Technology Innovation Institute (TII)",
    year: "2023"
  },
  {
    id: 16,
    title: "Polynomial Time Cryptanalytic Extraction of Neural Network Models",
    description: "Research project under the supervision of Adi Shamir focused on cryptanalytic extraction of neural networks.",
    tech: ["Cryptography", "AI Security"],
    link: "https://eprint.iacr.org/2023/1526",
    organization: "Technology Innovation Institute (TII)",
    year: "2023"
  },
  {
    id: 17,
    title: "GPU4SNN: Accelerating Spiking Neural Network Simulations",
    description: "Developed GPU4SNN to accelerate spike propagation for GPU-based Spiking Neural Networks.",
    tech: ["CUDA", "Spiking Neural Networks", "GPU"],
    link: "https://github.com/Crypto-TII/GPU4SNN",
    organization: "Technology Innovation Institute (TII)",
    year: "2022"
  },
  {
    id: 18,
    title: "GPU4SNN_MedIA: GPU-based Spiking Neural Networks for Medical Image Analysis",
    description: "Designed GPU-accelerated spiking neural networks tailored for medical image analysis.",
    tech: ["CUDA", "Medical AI", "SNN"],
    link: "https://dl.acm.org/doi/abs/10.1007/978-3-031-30442-2_30",
    organization: "Technology Innovation Institute (TII)",
    year: "2022"
  },

  // ---------------- Aarhus University ----------------
  {
    id: 19,
    title: "MARVEL Project: Multimodal Extreme Scale Data Analytics",
    description: "Worked on the EU Project MARVEL for smart cities, focusing on multimodal extreme scale data analytics.",
    tech: ["Deep Learning", "Smart Cities", "Multimodal Data"],
    link: "https://marvel-project.eu/",
    organization: "Aarhus University",
    year: "2021"
  },
  {
    id: 20,
    title: "Efficient Deep Learning for Visual and Multimodal Data Analysis",
    description: "Researched efficient architectures for visual and multimodal deep learning tasks.",
    tech: ["Deep Learning", "Computer Vision", "Multimodal AI"],
    link: "",
    organization: "Aarhus University",
    year: "2021"
  },

  // ---------------- University of Córdoba ----------------
  {
    id: 21,
    title: "GPU Acceleration for Liver Enhancement and Segmentation",
    description: "Developed GPU-based methods for pre-operative and intra-operative liver image enhancement and segmentation under the HiPerNav project.",
    tech: ["CUDA", "C++", "OpenCL", "GPU", "Medical Imaging"],
    link: "https://hipernav.eu/",
    organization: "University of Córdoba",
    year: "2020"
  },
  {
    id: 22,
    title: "GAN-based Pix2Pix for Multi-Organ Segmentation",
    description: "Implemented Pix2Pix GAN for multi-organ segmentation using LITS and 3DIRACDb datasets (collaboration with NTNU).",
    tech: ["GAN", "Pix2Pix", "Medical Imaging", "CUDA"],
    link: "",
    organization: "University of Córdoba",
    year: "2019"
  }
];

export const seminars = [
  {
    id: 1,
    description: 'Delivered expert sessions on “Parallel Computing and Deep Learning for Medical Image Analysis” in AICTE sponsored one week virtual STTP on research methodology and computational techniques (RMCT-2020) Phase 1, 2, and 3 in association with IEEE WIE Affinity group Bombay section',
    date: '7th-12th, 14th-19th, 21th-26th Dec 2020'
  },
  {
    id: 2,
    description: 'Conducted Student Development Program (SDP) on “Deep Learning: Industry Requirements and Applications”',
    location: 'YCCE, Nagpur, India',
    date: '10-11 Aug 2019'
  },
  {
    id: 3,
    description: 'Conducted SDP on “Machine Learning and Artificial Intelligence, Industry Requirements and Applications”',
    location: 'YCCE, Nagpur, India',
    date: '22-23 Dec 2018'
  },
  {
    id: 4,
    description: 'Conducted SDP on “Development of Embedded Processors using ARM Cortex M0+ Processors”',
    location: 'Global Academy of Technology, Bangalore, India',
    date: 'Jul 2018'
  },
  {
    id: 5,
    description: 'Assisted Prof. Donald Reay from Heriot-Watt University, UK in conducting Faculty Development Program on DSP for Educators',
    location: 'IIIT Bangalore, VNIT Nagpur and NIT Patna',
    date: 'Mar and Sep 2016'
  },
  {
    id: 6,
    description: 'Conducted a workshop on “Image and Video Processing using Linux, Python and Opencv on Raspberry Pi”',
    location: 'Sir MVIT College, Bangalore, India',
    date: 'Apr 2016'
  }
];

export const techTalks = [
  {
    id: 1,
    description: 'Delivered a talk on “Deep Learning for IoT” as an expert for the Faculty Development Program on “System Engineering with Applications of Internet of Things” sponsored by AICTE Training and Learning (ATAL)',
    location: 'COEP Pune, India',
    date: '4th-8th January 2020 (07 Jan 2021)'
  },
  {
    id: 2,
    description: 'Delivered expert lecture on ”Accelerating Cancer Diagnosis and Treatment using AI and HPC” as a resource person during the 5-day FDP on Internet of Things: Hardware, Software and Applications, sponsored by AICTE-ATAL',
    location: 'IIIT Kottayam, India',
    date: '10th Dec 2020'
  },
  {
    id: 3,
    description: 'Delivered a talk on “U-Net and YOLO for Liver Cancer Diagnosis” at The Faculty Development Program (FDP)',
    location: 'COEP Pune and MTU Imphal, India',
    date: '17 Jul 2020'
  },
  {
    id: 4,
    description: 'Delivered a talk on Technology and Opportunities',
    location: 'Sir MVIT College, Bangalore, India',
    date: 'Mar 2016'
  }
];

export const journals = [
  {
    id: 1,
    title: 'Workload-Balanced Pruning for Sparse Spiking Neural Networks',
    authors: 'RYin, YKim, YLi, A Moitra, Nitin Satpute, A Hambitzer, P Panda',
    publication: 'arXiv preprint arXiv:2302.06746',
    year: '2023',
    link: 'https://arxiv.org/abs/2302.06746'
  },
  {
    id: 2,
    title: 'GPU4SNN: Accelerating Spike Propagation for GPU-based SNN Simulations',
    authors: 'Nitin Satpute, A. Hambitzer, S. Aljaberi, Najwa Aaraj',
    publication: 'Springer Nature and International Conference on Parallel Processing and Applied Mathematics',
    year: '2022',
    link: ''
  },
  {
    id: 3,
    title: 'Cross Modality Guided Liver CT Enhancement for Improved Tumor Segmentation',
    authors: 'R. Naseem, Z. A. Khan, Nitin Satpute, A. Beghdadi, O. J. Elle, J. Gomez-Luna, F. A. Cheikh',
    publication: 'IEEE Access, vol. 9, pp. 118154-118167',
    year: '2021',
    doi: '10.1109/ACCESS.2021.3107473',
    impactFactor: '3.367',
    quartile: 'Q1',
    link: 'https://doi.org/10.1109/ACCESS.2021.3107473'
  },
  {
    id: 4,
    title: 'Brain Tumor Detection Using Machine Learning and Deep Learning: A Review',
    authors: 'Lotlikar VS, Nitin Satpute, Gupta A',
    publication: 'Current Medical Imaging',
    year: '2021',
    doi: '10.2174/1573405617666210923144739',
    pmid: '34561990',
    link: 'https://doi.org/10.2174/1573405617666210923144739'
  },
  {
    id: 5,
    title: 'Review on Diabetic Retinopathy with Deep Learning Methods',
    authors: 'S. Shekar, A. Gupta, Nitin Satpute',
    publication: 'Journal of Medical Imaging',
    year: '2021',
    link: 'https://caps.luminad.com:8443/stockage/stock/SPIE/LDL-SPIE-JMI-21117VR/JMI-21117VR_online.pdf'
  },
  {
    id: 6,
    title: 'GPU Acceleration of Liver Enhancement for Tumor Segmentation',
    authors: 'Nitin Satpute, R. Naseem, E. Pelanis, J. Gomez-Luna, F. A. Cheikh, O. J. Elle, J. Olivares',
    publication: 'Computer Methods and Programs in Biomedicine, 184, 105285',
    year: '2020',
    doi: '10.1016/j.cmpb.2019.105285',
    impactFactor: '3.632',
    quartile: 'Q1',
    link: 'https://doi.org/10.1016/j.cmpb.2019.105285'
  },
  {
    id: 7,
    title: 'Accelerating Chan-Vese Model with Cross-Modality Guided Contrast Enhancement for Liver Segmentation',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    publication: 'Computers in Biology and Medicine, 124, 103930',
    year: '2020',
    doi: '10.1016/j.compbiomed.2020.103930',
    impactFactor: '3.434',
    quartile: 'Q1',
    link: 'https://doi.org/10.1016/j.compbiomed.2020.103930'
  },
  {
    id: 8,
    title: 'Fast Parallel Vessel Segmentation',
    authors: 'Nitin Satpute, R. Naseem, R. Palomar, O. Zachariadis, J. Gomez-Luna, F. A. Cheikh, J. Olivares',
    publication: 'Computer Methods and Programs in Biomedicine, 192, 105430',
    year: '2020',
    doi: '10.1016/j.cmpb.2020.105430',
    impactFactor: '3.632',
    quartile: 'Q1',
    link: 'https://doi.org/10.1016/j.cmpb.2020.105430'
  },
  {
    id: 9,
    title: 'Accelerating B-spline Interpolation on GPUs: Application to Medical Image Registration',
    authors: 'O. Zachariadis, A. Teatini, Nitin Satpute, J. Gomez-Luna, Onur Mutlu, O. J. Elle, J. Olivares',
    publication: 'Computer Methods and Programs in Biomedicine, 193, 105431',
    year: '2020',
    doi: '10.1016/j.cmpb.2020.105431',
    impactFactor: '3.632',
    quartile: 'Q1',
    link: 'https://doi.org/10.1016/j.cmpb.2020.105431'
  },
  {
    id: 10,
    title: 'Accelerating Sparse Matrix-Matrix Multiplication with GPU Tensor Cores',
    authors: 'O. Zachariadis, Nitin Satpute, J. Gomez-Luna, J. Olivares',
    publication: 'Computers and Electrical Engineering, Volume 88, 106848',
    year: '2020',
    doi: '10.1016/j.compeleceng.2020.106848',
    impactFactor: '2.663',
    quartile: 'Q2',
    link: 'https://doi.org/10.1016/j.compeleceng.2020.106848'
  },
  {
    id: 11,
    title: 'Fast Parallel Cropping for Liver Segmentation and Volume Assessment',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    publication: '',
    year: '2020',
    link: ''
  },
  {
    id: 12,
    title: 'Segmentation and Classification of MRI Brain Images using Texture Features',
    authors: 'A. Shriram, N. Dhabekar, M. Hussain, P. Jumle, Nitin Satpute',
    publication: 'International Journal of Machine Intelligence and Applications',
    year: '2011',
    link: ''
  }
];

export const posters = [
  {
    id: 1,
    title: 'Fast Parallel Liver Segmentation',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    event: '7th Annual Meeting of the European Computer Assisted Liver Surgery Society (ECALSS)',
    location: 'Bern, Switzerland',
    date: 'Oct 2019',
    link: 'https://www.ecalss.org'
  },
  {
    id: 2,
    title: 'GPU-based Liver Image Segmentation',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    event: 'VII Congreso Científico de Investigadores en Formación de la Universidad de Córdoba',
    location: 'Córdoba, Spain',
    date: 'Feb 2019',
    link: ''
  },
  {
    id: 3,
    title: 'Fast Parallel Seeded Region Growing for Liver Segmentation',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    event: 'HiPerNav Training Event',
    location: 'University of Córdoba, Spain',
    date: 'Sep 2018',
    link: ''
  },
  {
    id: 4,
    title: 'Matrix Multiplication Performance Characterization on GPUs with a Single Point',
    authors: 'Nitin Satpute',
    event: 'Programming and Tuning Massively Parallel Systems (PUMPS 2015)',
    location: 'Barcelona Supercomputing Center (BSC), Spain',
    date: '2015',
    link: ''
  },
  {
    id: 5,
    title: 'Comparing and Evaluating GPU Platforms with a Single Point',
    authors: 'Nitin Satpute, R. Giorgi',
    event: 'Eleventh International Summer School on Advanced Computer Architecture and Compilation for High-Performance and Embedded Systems (ACACES 2015)',
    location: 'Italy',
    date: '2015',
    link: ''
  }
];

export const conferences = [
  {
    id: 1,
    title: 'Polynomial Time Cryptanalytic Extraction of Neural Network Models',
    authors: 'Isaac A. Canales-Martínez, Jorge Chávez-Saab, Anna Hambitzer, Francisco Rodríguez-Henríquez, Nitin Satpute, Adi Shamir',
    event: 'Eurocrypt',
    location: 'Switzerland',
    date: 'May 26-30, 2024',
    link: ''
  },
  {
    id: 2,
    title: 'ACE-HoT: Accelerating an Extreme Amount of Symmetric Cipher Evaluations for High-Order Avalanche Tests',
    authors: 'Emanuele Bellini, Nitin Satpute, Juan Grados, Mohamed Rachidi, Joan Daemen, Solane El Hirch',
    event: 'LATINCRYPT',
    location: 'Quito, Ecuador',
    date: 'Oct 4-6, 2023',
    link: ''
  },
  {
    id: 3,
    title: 'Hardware Implementation of High-performance Classifiers for Edge Gateway of Smart Automobile',
    authors: 'N.B. Gaikwad, S.K. Khare, Nitin Satpute, Avinash G. Keskar',
    event: '1st International Conference on the Paradigm Shifts in Communication, Embedded Systems, Machine Learning and Signal Processing (PCEMS)',
    location: '',
    date: '2022',
    link: ''
  },
  {
    id: 4,
    title: 'Optimum Vessel Segmentation',
    authors: 'J. Olivares, O. Zachariadis, Nitin Satpute, J. Gómez-Luna',
    event: '17th Iberian Conference on Information Systems and Technologies (CISTI)',
    location: '',
    date: '2022',
    link: ''
  },
  {
    id: 5,
    title: 'Fast Parallel Cropping for Liver Segmentation',
    authors: 'Nitin Satpute, O. Zachariadis, J. Gómez-Luna, J. Olivares',
    event: '33rd Annual SMIT Conference',
    location: 'Oslo, Norway',
    date: 'Jan 2022',
    link: ''
  },
  {
    id: 6,
    title: 'How High Performance Computing will Revolutionize Next Generation Surgery',
    authors: 'J. Olivares, Nitin Satpute, O. Zachariadis, J. Gómez-Luna',
    event: '33rd Annual SMIT Conference',
    location: 'Oslo, Norway',
    date: 'Jan 2022',
    link: ''
  },
  {
    id: 7,
    title: 'A Flexible Scalable Hardware Architecture for Radial Basis Function Neural Networks',
    authors: 'M. Mohammadi, Nitin Satpute, R. Ronge, J. Chandiramani, S.K. Nandy, A. Raihan, T. Verma, R. Narayan, S. Bhattacharya',
    event: 'International Conference on VLSI Design and Embedded Systems',
    location: '',
    date: '2015',
    doi: '10.1109/VLSID.2015.91',
    link: 'https://doi.org/10.1109/VLSID.2015.91'
  },
  {
    id: 8,
    title: 'Tabu Search Based Implementation of Object Tracking using Joint Colour Texture Histogram',
    authors: 'B. Kumar Koora, Nitin Satpute, A. Adiga',
    event: 'International Conference on Industrial and Information Systems',
    location: 'IIT Chennai, India',
    date: 'Aug 6, 2012',
    doi: '10.1109/ICIINFS.2012.6304829',
    link: 'https://doi.org/10.1109/ICIINFS.2012.6304829'
  },
  {
    id: 9,
    title: 'GPU based Liver Image Segmentation',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    event: 'VII Congreso Científico de Investigadores en Formación de la Universidad de Córdoba',
    location: 'Córdoba, Spain',
    date: 'Feb 2019',
    link: ''
  },
  {
    id: 10,
    title: 'Evaluation of GPU Region Growing Methods on NVIDIA GPUs',
    authors: 'Nitin Satpute, J. Gomez-Luna, J. Olivares',
    event: 'III Jornadas Andaluzas de Informática (JAI)',
    location: 'Malaga, Spain',
    date: '2017',
    link: ''
  },
  {
    id: 11,
    title: 'Comparing and Evaluating GPU Platforms with a Single Point',
    authors: 'Nitin Satpute, R. Giorgi',
    event: 'Eleventh International Summer School on Advanced Computer Architecture and Compilation for High-Performance and Embedded Systems (ACACES)',
    location: 'Italy',
    date: '2015',
    link: ''
  }
];

export const skills = [
  { name: 'GPU', icon: 'FaMicrochip' },
  { name: 'Large Language Models (LLMs)', icon: 'FaBrain' },
  { name: 'Transformers', icon: 'SiOpenai' },
  { name: 'Multi-modal Generative Models', icon: 'FaBrain' },
  { name: 'Distributed AI and HPC', icon: 'FaNetworkWired' },
  { name: 'Deep Learning', icon: 'SiTensorflow' },
  { name: 'Artificial Neural Networks', icon: 'FaProjectDiagram' },
  { name: 'Decision Trees', icon: 'FaTree' },
  { name: 'Random Forest', icon: 'FaTree' },
  { name: 'Regression', icon: 'FaChartLine' },
  { name: 'Classification', icon: 'FaChartLine' },
  { name: 'Slurm', icon: 'FaCode' },
  { name: 'Ray', icon: 'FaNetworkWired' },
  { name: 'Vllm', icon: null },
  { name: 'Grafana', icon: 'SiGrafana' },
  {
    name: 'Python (NumPy, OpenCV, Pandas, Matplotlib, TensorFlow, Horovod, PyTorch)',
    icon: 'SiPython'
  },
  { name: 'Linux', icon: 'SiLinux' },
  { name: 'C', icon: 'SiC' },
  { name: 'C++', icon: 'SiCplusplus' },
  { name: 'CUDA', icon: 'SiNvidia' },
  { name: 'Docker containers', icon: 'SiDocker' },
  { name: 'Kubernetes', icon: 'SiKubernetes' },
  { name: 'OpenCL', icon: null },
  { name: 'OpenMP', icon: null },
  { name: 'MATLAB', icon: 'FaProjectDiagram' },
  { name: 'Open3D', icon: 'SiSimpleicons' },
  { name: 'Verilog', icon: 'FaCode' },
  { name: 'Bluespec System Verilog', icon: 'FaCode' },
  { name: 'Infrastructure as Code (IaC)', icon: 'FaCode' },
  { name: 'Terraform', icon: 'SiTerraform' },
  { name: 'NIM', icon: 'SiNvidia' },
  { name: 'NeMo', icon: 'SiNvidia' },
  { name: 'Ray for Cluster', icon: 'FaNetworkWired' },
  { name: 'OKE (Oracle Kubernetes Engine)', icon: 'SiKubernetes' },
  { name: 'AI', icon: 'FaBrain' },
  { name: 'NVIDIA GPUs', icon: 'SiNvidia' },
  { name: 'Distributed Training', icon: 'FaNetworkWired' },
  { name: 'Inference', icon: 'FaMicrochip' },
  { name: 'Spiking Neural Networks', icon: 'FaProjectDiagram' }
];

export const skillRows = [
  skills.slice(0, 10),
  skills.slice(10, 20),
  skills.slice(20, 30)
];

export const awards = [
    {
    id: 1,
    title: "Guest of Honour – Independence Day",
    description:
    "Invited as a Guest for 72nd Independence Day at South Point School, Nagpur, India (15 Aug 2018).",
    year: 2018,
  },
  {
    id: 2,
    title: "Marie Skłodowska-Curie Grant",
    description:
      "Awarded Marie Skłodowska-Curie grant from the project High Performance Soft-tissue Navigation (HiPerNav-H2020-MSCA-ITN 2016) in an Innovative Training Network (ITN).",
    year: 2016,
  },
  {
    id: 3,
    title: "Funding from MeitY, India",
    description:
      "Conferred funding from Ministry of Electronics and Information Technology (MeitY), India (2016-2017) and funded acceptance from PUMPS 2015, Spain and ACACES 2015, Italy Summer Schools.",
    year: 2016,
  },
  {
    id: 4,
    title: "GATE Scholarship & State Rank",
    description:
      "Received GATE scholarship (Aug 2011-July 2013) at BITS Pilani and full fee waiver at YCCE Nagpur for securing one of the top five ranks in the State Engineering Entrance Examination (2007-2011).",
    year: 2011,
  },
];

export const certificates = [
  { src: "/1.png", alt: "Image 1" },
  { src: "/2.png", alt: "Image 2" },
  { src: "/3.png", alt: "Image 3" },
  { src: "/4.png", alt: "Image 4" },
  { src: "/5.png", alt: "Image 5" },
];